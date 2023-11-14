import React from 'react'
import { todayText } from '../data/today';


const Today = () => {
    return (
        <>
            <section id='todayPage'>
                {todayText.map((today, key) => (
                    <div className="today__inner" key={key}>
                        <div className="today__thumb">
                            <img src={today.img} alt={today.title} />
                        </div>
                        <div className="today__text">
                            <span className='today__pick'>Today's pick!</span>
                            <h3>{today.title}</h3>
                            <p>{today.desc}</p>
                            <div className="info">
                                <span className='author'>{today.author}</span>
                                <span className='date'>{today.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>

    )
}

export default Today