import React from 'react'
import { todayText } from '../../data/today';
import { Link } from 'react-router-dom';

const Today = () => {

    return (
        <section id='todayPage'>
            <div className="today__inner">
                <Link to={`/video/${todayText[0].videoId}`}>
                    <div className="today__thumb">
                        <img src={todayText[0].img} alt={todayText[0].title} />
                    </div>
                    <div className="today__text">
                        <span className='today__pick'>Today's pick!</span>
                        <h3>{todayText[0].title}</h3>
                        <p>{todayText[0].desc}</p>
                        <div className="info">
                            <span className='author'>{todayText[0].author}</span>
                            <span className='date'>{todayText[0].date}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Today