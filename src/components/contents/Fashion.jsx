import React from 'react'
import { fashionText } from '../../data/fashion';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';


const Fashion = () => {
    return (

        <section id='youtuber'>
            <h2>✨ 패션 유튜버 모음</h2>

            <div className='fashion__inner'>
                <Swiper
                    slidesPerView={9}
                    spaceBetween={20}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        100: {
                            slidesPerView: 2
                        },
                        400: {
                            slidesPerView: 3
                        },
                        600: {
                            slidesPerView: 4
                        },
                        960: {
                            slidesPerView: 5
                        },
                        1200: {
                            slidesPerView: 6
                        },
                        1600: {
                            slidesPerView: 9
                        }

                    }}
                >
                    {fashionText.map((fashion, key) => (

                        <SwiperSlide>
                            <div className='fashion play__icon' key={key}>
                                <div className="fashion__img">
                                    <Link to={`/channel/${fashion.channelId}`}>
                                        <img src={fashion.img} alt={fashion.author} />
                                    </Link>
                                </div>
                                <div className="fashion__info">{fashion.author}</div>
                            </div>
                        </SwiperSlide>

                    ))}

                </Swiper>
            </div>
        </section>
    )
}

export default Fashion