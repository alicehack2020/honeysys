import React from 'react'
import "../App.css"
import plus from "../img/plus.png"
const ProductCardMobile = ({discount,productImage,productName,productSize,productPrice,productOldPrice,saving}) => {
  return (
      <div className='productCardMobile'>
          <div className='ProductMobileCard'>
            <span className='productDiscountMobile'>₹{discount}OFF</span> 
            <div className='productImageMobile'>
                  <img src={productImage} alt="" srcset="" /> 
            </div>
              <div className='favDivMobile'>
                  <div>
                     <img src={plus} alt="" srcset="" />
                  </div>     
              </div>
          </div> 
          <h1 className='productName'>{ productName}</h1>
          <p className='productSize'>{productSize}</p>
          <div className='flexMobile'>
              <h1 className='produtPrice'>₹{productPrice}</h1> 
              <p className='productOldPrice'>₹{productOldPrice}</p>
          </div>

          </div>
      
              
          
              

          
      
  )
}

export default ProductCardMobile