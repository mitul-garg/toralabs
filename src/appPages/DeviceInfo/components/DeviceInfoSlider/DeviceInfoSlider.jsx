import React from "react";

import home from "../../../../assets/device-info/home.webp";
import device from "../../../../assets/device-info/device.webp";
import system from "../../../../assets/device-info/system.webp";
import cpu from "../../../../assets/device-info/cpu.webp";
import camera from "../../../../assets/device-info/camera.webp";
import sensor from "../../../../assets/device-info/sensor.webp";
import apps from "../../../../assets/device-info/apps.webp";
import tests from "../../../../assets/device-info/tests.webp";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./styles.css";

SwiperCore.use([EffectCoverflow, Pagination]);

const DeviceInfoSlider = () => {
  return (
    <div className="device-info-slider" id="screenshots">
      <h1>Screenshots</h1>
      <p>
        {"<-"} Slide {"->"}
      </p>
      <div className="slider-container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={home} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={device} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={system} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cpu} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={camera} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sensor} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={apps} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={tests} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default DeviceInfoSlider;
