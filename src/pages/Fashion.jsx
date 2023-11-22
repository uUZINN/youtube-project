import React from 'react'
import { fashionText } from '../data/fashion';
import { Link } from 'react-router-dom';
import Main from '../components/section/Main';

const Fashion = () => {
    return (
        <Main
            title='패션 유튜버 채널'
            description='패션 유튜버 채널 페이지 입니다. 패션 유튜버의 영상을 모두 확인할 수 있습니다.'
        >
            <section id='youtuber'>
                <h2>✨ 패션 유튜버 모음</h2>
                <div className='fashion__inner'>
                    {fashionText.map((fashion, key) => (
                        <div className='fashion play__icon' key={key}>
                            <div className="fashion__img">
                                <Link to={`/channel/${fashion.channelId}`}>
                                    <img src={fashion.img} alt={fashion.author} />
                                </Link>
                            </div>
                            <div className="fashion__info">{fashion.author}</div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    )
}

export default Fashion