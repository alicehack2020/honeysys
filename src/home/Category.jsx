import React from 'react'
import "../App.css"
import cat1 from "../img/cat1.PNG"
import cat2 from "../img/cat2.PNG"
import cat3 from "../img/cat3.PNG"
const Category = () => {
  const data=[cat1,cat2,cat3]  
  return (
      <div className='catMain'>
          {
              data.map((e, index) => {
                  return  <div className='catDiv' key={index}>
                              <img src={e} alt="" />
                         </div> 
              })
          }
          
      </div>
  )
}

export default Category