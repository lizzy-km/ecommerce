

import React, { useState } from "react"
import { Link } from "react-router-dom"

const ShopCart = ({ shopItems,index,addToCart }) => {
  
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

 

  return (
    <>
      
          <div key={index} className=' relative flex flex-col items-center justify-center h-auto w-[19rem]  '>
            <div className=' product '>
              <Link  className='w-[15rem]'>
                <span className='discount'>{shopItems.idMeal}% Off</span>
                <Link to={`/Detail/${shopItems.idMeal}`} ><img className=" w-[15rem] " src={shopItems.strMealThumb} alt='' /></Link>
                
                <div className=' product-like'>
                  <label className="" >{count}</label> <br />
                  <i className=' text-lg  fa-regular fa-heart' onClick={increment}></i>
                </div>
              </Link>
              <div className='product-details'>
                <h3>{shopItems.strMeal
}</h3>
                <div className='rate text-[1rem] text-[#ffcd4e] '>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className=' flex justify-between items-center text-[#e94560] p-[.2rem] price'>
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
