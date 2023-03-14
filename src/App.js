// import { Carousel } from 'react-bootstrap';
import React from 'react';
import './App.css';
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import { Autoplay, Pagination,Navigation } from 'swiper';
// import './custom.css';
// import MyCarousel from './MyCarousel';

import Pic1 from "./Pic1.png"
import Pic2 from "./Pic2.png"
import Pic3 from "./Pic3.png"
import Pic4 from "./Pic4.png"
import Pic5 from "./Pic5.png"
import brand1 from "./brand1.png"
import brand2 from "./brand2.png"
import toppick from "./toppick.png"
function App() {
  return (
    <>
      <div style={{ width:"100%",height:"100%", overflow:"hidden"}}>    
        <Swiper
        centeredSlides={true}
        autoplay={{
          delay:2500,
          disableOnInteraction:false
        }}
        navigation={true}
        modules={[ Autoplay, Pagination,Navigation ]}
        >
          <SwiperSlide>
            <img src={Pic1} alt="img" id='imgs'/>
          </SwiperSlide>

          <SwiperSlide>
            <img src={Pic2} alt="img" id='imgs'/>
          </SwiperSlide>

          <SwiperSlide>
            <img src={Pic3} alt="img" id='imgs'/>
          </SwiperSlide>

          <SwiperSlide>
            <img src={Pic4} alt="img" id='imgs'/>
          </SwiperSlide>

          <SwiperSlide>
            <img src={Pic5} alt="img" id="imgs" />
          </SwiperSlide>

          <h2 id="h2">BIGGEST DEALS ON TOP BRANDS</h2>
          <div id="brand">
            <img src={brand1} alt="img" id="brandpic"/>
            <img src={brand2} alt="img" id="brandpic"/>
          </div>

          <h2 id="h2">TOP PICKS</h2>
          <div>
            <img src={toppick} alt="toppickpic" id="toppick"/>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default App;
