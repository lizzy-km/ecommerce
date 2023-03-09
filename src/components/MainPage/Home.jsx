import React from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='flex items-center justify-center'>
        {/* <Categories />  */}
       <SliderHome /> 
        </div>
      </section>
    </>
  )
}

export default Home
