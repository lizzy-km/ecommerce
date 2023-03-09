import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


const Navbar = () => {
    const [MobileMenu,setMobileMenu] =useState(false)
  return (
    <>
    <header className=' tracking-wider  h-[10vh]  '>
        <div className='max-[768px]:ml-[1rem] ml-[1rem] items-center w-{100%} flex-row justify-between flex'>
            
            <div className='max-[768px]:mr-[0rem] justify-center w-[100%]   items-center flex gap-[4rem]'>
                <ul 
                className={MobileMenu? " gap-[4rem] flex flex-row justify-between max-[768px]:absolute max-[768px]:block max-[768px]:left-[0] max-[768px]:top-0 max-[768px]:w-[60%] max-[768px]:h-[100vh] max-[768px]:bg-[#fff] max-[768px]:z-[888] nav-links-MobileMenu" :"link   flex max-[768px]:flex-col capitalize" }
                onClick={ () => setMobileMenu(false) }
                >
                    <li className=' max-[768px]:uppercase  max-[768px]:w-[100%]'>
                        <Link  to={'/'}>Home</Link>
                    </li>
                    <li className=' max-[768px]:uppercase max-[768px]:w-[100%]'>
                        <Link className='max-[768px]:none' to={'/pages'}>Pages</Link>
                    </li>
                    <li className=' max-[768px]:uppercase max-[768px]:w-[100%]'>
                        <Link className='max-[768px]:none' to={'/user'}>User account</Link>
                    </li>
                    <li className=' max-[768px]:uppercase max-[768px]:w-[100%]'>
                        <Link className='max-[768px]:none' to={'/vendor'}>Vendor account</Link>
                    </li>
                    <li className=' max-[768px]:uppercase max-[768px]:w-[100%]'>
                        <Link className='max-[768px]:none' to={'/track'}>Track my order</Link>
                    </li>
                    <li className=' max-[768px]:uppercase max-[768px]:w-[100%]'>
                        <Link className='max-[768px]:none' to={'/contact'}>contact</Link>
                    </li>
                </ul>
                <button className='max-[768px]:ml-[-2.2rem]  ' type="" onClick={()=> setMobileMenu(!MobileMenu)} >
                    {
                        MobileMenu? <i className='fa fa-times  max-[768px]:z-[999] max-[768px]:absolute max-[768px]:top-[1rem] max-[768px]:text-[#ff014f] max-[768px]:right-[14.7rem] max-[768px]:text-[1.5rem]  max-[768px]:block close home-btn'></i> : 
                        <i className='fas max-[768px]:z-[999] fa-bars max-[768px]:absolute max-[768px]:top-[11.8rem] max-[768px]:text-[#ff014f]  max-[768px]:text-[1.5rem] max-[768px]:right-[0.5rem] open'></i>
                    }
                </button>
            </div>
        </div>
    </header>
    </>
  )
}

export default Navbar