

import React, { useState } from "react"
import { Link } from "react-router-dom"

const ShopCart = ({ shopItems,index,addToCart }) => {
  
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

 

  return (
    <>
      
          <div key={index} className='box'>
            <div className='product mtop'>
              <Link  className='img'>
                <span className='discount'>{shopItems.idMeal}% Off</span>
                <Link to={`/Detail/${shopItems.idMeal}`} ><img src={shopItems.strMealThumb} alt='' /></Link>
                
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </Link>
              <div className='product-details'>
                <h3>{shopItems.strMeal
}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>${shopItems.idMeal}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={() => addToCart(shopItems)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
       
    </>
  )
}

export default ShopCart
