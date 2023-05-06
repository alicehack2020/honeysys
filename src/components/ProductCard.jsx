import React from 'react'
import "../App.css"
const ProductCard = ({discount,productImage,productName,productSize,productPrice,productOldPrice,saving}) => {
  return (
      <div className='productCard'>
          <div className='flex'>
              <h3 className='productDiscount'>${discount}OFF</h3> 
               <div className='fav favDiv'>
                  <img src="https://ratnadeep.online/_next/image?url=%2Fimages%2Fheart.svg&w=32&q=75" alt="" srcset="" />
               </div>
          </div>   
          <div className='productImage'>
              <img src={productImage} alt="" srcset="" /> 
          </div>
          <h1 className='productName'>{ productName}</h1>
          <p className='productSize'>{productSize}</p>

          <div className='flex'>
              <h1 className='produtPrice'>${productPrice}</h1>
              <button className='addToCard'>Add</button>
          </div>
          <p className='productOldPrice'>{productOldPrice}</p>
          <p className='productSaving'>saving $ {saving}</p>
     </div>
  )
}

export default ProductCard