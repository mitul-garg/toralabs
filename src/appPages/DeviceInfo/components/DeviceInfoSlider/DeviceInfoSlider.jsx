import React from "react";

import home from "../../../../assets/device-info/home.webp";
import device from "../../../../assets/device-info/device.webp";
import system from "../../../../assets/device-info/system.webp";
import cpu from "../../../../assets/device-info/cpu.webp";
import camera from "../../../../assets/device-info/camera.webp";
import sensor from "../../../../assets/device-info/sensor.webp";
import apps from "../../../../assets/device-info/apps.webp";
import tests from "../../../../assets/device-info/tests.webp";

// import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";

import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Lazy, Pagination, Navigation } from "swiper";

// SwiperCore.use([EffectCoverflow, Pagination]);

const DeviceInfoSlider = () => {
  return (
    <div className="device-info-slider" id="screenshots">
      <h1>Screenshots</h1>
      <p>
        {"<-"} Slide {"->"}
      </p>
      <div className="slider-container">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          lazy={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Lazy, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={home} className="swiper-lazy" />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={device} className="swiper-lazy" />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={system} className="swiper-lazy" />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cpu} className="swiper-lazy" />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={camera} className="swiper-lazy" />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sensor} className="swiper-lazy" />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={apps} className="swiper-lazy" />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={tests} className="swiper-lazy" />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default DeviceInfoSlider;
