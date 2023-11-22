import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';

import VideoSearch from '../components/video/VideoSearch';
import Main from '../components/section/Main';

import { BsPersonPlusFill } from "react-icons/bs";
import { PiVideoFill } from "react-icons/pi";
import { AiOutlineEye } from "react-icons/ai";

const Channel = () => {
    const { channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideo, setChannelVideo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState(null);



    useEffect(() => {
        const fetchResult = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                setChannelDetail(data.items[0])

                const videoData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`)
                setChannelVideo(videoData.items);
                setNextPageToken(videoData.nextPageToken);
            } catch (error) {
                console.log("Error -> ", error);
            } finally {
                setLoading(false);
            }
        }
        fetchResult();
    }, [channelId])

    const loadMoreVideos = async () => {
        if (nextPageToken) {
            const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`);
            setChannelVideo(prevVideos => [...prevVideos, ...videosData.items]);
            setNextPageToken(videosData?.nextPageToken);
        }
    }

    const channelPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main
            title='패션 유튜버 채널'
            description='패션 유튜버 채널 페이지 입니다. 패션 유튜버의 영상을 모두 확인할 수 있습니다.'
        >
            <section id='channelPage' className={channelPageClass}>
                {channelDetail && (
                    <div className="channel__inner">
                        <div className='channel__header' style={{
                            backgroundImage: channelDetail?.brandingSettings?.image?.bannerExternalUrl
                                ? `url(${channelDetail.brandingSettings.image.bannerExternalUrl})`
                                : 'none',
                            backgroundColor: !channelDetail?.brandingSettings?.image?.bannerExternalUrl
                                ? 'var(--black100)'
                                : 'transparent'
                        }}>
                            <div className="circle">
                                <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                            </div>
                        </div>
                        <div className="channel__info">
                            <h3 className="title">{channelDetail.snippet.title}</h3>
                            <div className="info">
                                <span><BsPersonPlusFill />{channelDetail.statistics.subscriberCount}</span>
                                <span><PiVideoFill />{channelDetail.statistics.videoCount}</span>
                                <span><AiOutlineEye />{channelDetail.statistics.viewCount}</span>
                            </div>
                            <p className="desc">{channelDetail.snippet.description}</p>
                        </div>
                        <div className="channel__video video__inner search">
                            <VideoSearch videos={channelVideo} layout="channel" />
                        </div>
                        <div className="channel__more">
                            {nextPageToken && <button onClick={loadMoreVideos}>더 보기</button>}
                        </div>
                    </div>
                )}

            </section>
        </Main>
    )
}

export default Channel