import React, { useState } from "react";

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
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

import { FreeMode, Navigation, Thumbs } from "swiper";

// SwiperCore.use([EffectCoverflow, Pagination]);

const DeviceInfoSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="device-info-slider" id="screenshots">
      <h1>Screenshots</h1>
      <div className="slider-container">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src={home} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={device} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={system} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cpu} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={camera} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sensor} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={apps} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={tests} />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={8}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={home} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={device} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={system} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cpu} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={camera} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sensor} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={apps} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={tests} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default DeviceInfoSlider;
