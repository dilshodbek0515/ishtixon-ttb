import "./Main.css"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import swiper_img1 from "../../assets/images/main img/main img1.jpg"
import swiper_img2 from "../../assets/images/main img/main img2.jpg"
const Main = ({ language }) => {
    return (
        <div className="main_bg">
            <div className="main">
                <div className="main_content">
                    <h2 className="main_text_one">
                        {
                            language === "UZ" ? "ISHTIXON TUMANI TIBBIYOT" : "ИШТИХАНСКИЙ РАЙОН МЕДИЦИНСКОЕ"
                        }
                    </h2>
                    <h1 className="main_text_two">
                        {
                            language === "UZ" ? "BIRLASHMASI" : "ОБЪЕДИНЕНИЕ"
                        }
                    </h1>
                    <p className="main_text_there">
                        {
                            language === "UZ"
                                ?
                                "Samarqand viloyati Ishtixon Tuman Tibbiyot Birlashmasi: Biz bilan sog'lig'ingizni kafolatlang!"
                                :
                                "Иштихонское районное медицинское объединение Самаркандской области: Гарантируйте свое здоровье вместе с нами!"
                        }
                    </p>
                </div>
                <div className="main_swiper">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="main_swiper"
                    >
                        <SwiperSlide>
                            <img className="swiper_img" src={swiper_img1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img className="swiper_img" src={swiper_img2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="swiper_img" src={swiper_img1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img className="swiper_img" src={swiper_img2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="swiper_img" src={swiper_img1} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Main