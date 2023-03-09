import React from "react"
import logo from '/src/assets/images/logo.svg'

import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className=' max-[500px]:flex max-[500px]:flex-col pl-[2rem] container grid2'>
          <div className='box'>
            <img className=" w-[2rem] " src={logo} alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className=' pr-[1rem] box'>
            <h2>Contact Us</h2>
            <ul>
            <li>3 Zaypine, Kyauktaga, Bago, Myanmar </li>
              <li>Email: kaungmyatsoe2k21@gmail.com</li>
              <li>Phone: +95 9761 723 325</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
