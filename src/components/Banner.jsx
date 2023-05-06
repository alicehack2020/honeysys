import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settingsBanner } from './CarouselSetting';
import { bannerData } from '../data';
function Banner() {
  return (
    <div>
    <Slider {...settingsBanner}>
          {
            bannerData.map((e,index) => {
              return<div className="card"><img src={e} key={index} /></div>
            })
          }
       
    </Slider>
  </div>
  );
}

export default Banner;
