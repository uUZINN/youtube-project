import React from 'react'
import { fashionText } from '../data/fashion';
import { Link } from 'react-router-dom';

const Fashion = () => {
    return (
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
    )
}

export default Fashion