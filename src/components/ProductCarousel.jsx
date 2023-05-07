import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../App.css"
import { settingsProduct } from './CarouselSetting';
import ProductCard from './ProductCardDesktop';
import { productData } from '../data';
import { isMobile } from 'mobile-device-detect';
import ProductCardDesktop from './ProductCardDesktop';
import ProductCardMobile from './ProductCardMobile';

const ProductCarousel = () => {
  console.log(isMobile)
  return (
      <div>
      <Slider {...settingsProduct}>
        {
          productData.map((e, index) => {
            return <>
              {
               isMobile?<ProductCardMobile
              discount={e.discount}
              productImage = {e.productImage }
              productName = {e.productName }
              productSize = {e.productSize }
              productPrice={e.productPrice}
              productOldPrice={e.productOldPrice}
              saving={e.saving}
              key={index} />:<ProductCardDesktop
              discount={e.discount}
              productImage = {e.productImage }
              productName = {e.productName }
              productSize = {e.productSize }
              productPrice={e.productPrice}
              productOldPrice={e.productOldPrice}
              saving={e.saving}
              key={index} />
              }
            </>
          })
        }
        
      </Slider>  
     </div>
  )
}

export default ProductCarousel