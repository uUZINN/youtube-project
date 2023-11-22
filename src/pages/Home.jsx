import React, { useEffect, useState } from 'react'
import Today from '../components/contents/Today';
import Fashion from '../components/contents/Fashion';
import Main from '../components/section/Main';
import VideoSlider from '../components/video/VideoSlider';
import { fetchFromAPI } from '../utils/api';

const Home = () => {

    const [channelVideos, setChannelVideos] = useState([]);

    useEffect(() => {
        const channelIds = [
            { channelId: 'UCKyF_OgFAv5ZFSPGzMpoKxA', title: '🔷채소 CHAESO🔸 최신 영상' },
            { channelId: 'UCL0DDCStyO4NeAFJoN_cO8Q', title: '🔷멜로우 Mallow🔸 최신 영상' },
            { channelId: 'UCw-kXdzxMdMdLNI0ZlFFbmA', title: '🔷오늘의 주우재🔸 최신 영상' },
            { channelId: 'UCHW4AUb5VXOUkJpVYmd-EoA', title: '🔷KYURIN 규린🔸 최신 영상' },
            { channelId: 'UC9gW47NqzI1x7e8qsflvUUw', title: '🔷한별 Hanbyul🔸 최신 영상' },
        ];


        const fetchResults = async () => {
            try {
                const allChannelVideos = [];
                for (const channel of channelIds) {
                    const videosData = await fetchFromAPI(`search?channelId=${channel.channelId}&part=snippet&order-date`);
                    allChannelVideos.push({ ...channel, videos: videosData.items });
                    console.log(videosData.items)
                }
                setChannelVideos(allChannelVideos);
            } catch (error) {
                console.log("Error fetching data", error);
            }
        }
        fetchResults();
    }, [])

    return (
        <Main
            title='패션 유튜버'
            description='패션 유튜버 모음 사이트에 오신 것을 환영합니다.'
        >
            <Today />
            <Fashion />
            {channelVideos.map((channel, index) => (
                <VideoSlider key={index} videos={channel.videos} title={channel.title} />
            ))}
        </Main>
    )
}

export default Home