import React from "react"

const Head = () => {
  return (
    <>
      <section className='max-[500px]:flex-col gap-[1rem] items-center justify-between  bg-[#0f3460] text-slate-200 text-[13px] p-[.7rem] flex'>
      
      <div className=' max-[500px]:w-[100%] max-[500px]:ml-[0rem] ml-[1rem] gap-[.3rem] w-[30%]   flex flex-row justify-evenly'>
      <div className=' cursor-pointer gap-[.3rem] items-center flex'>
        <i className='fa fa-phone'></i>
        <label className=' w-[8rem] cursor-pointer'>+959 7617 23325</label>
        </div>
        <div>
        <i className='fa fa-envelope'></i>
        <label className=' cursor-pointer'>kaungmyatsoe2k21@gmail.com</label>
          </div>
           
            
          </div>
          <div className='max-[500px]:w-[100%] justify-evenly max-[500px]:mr-[0rem]  cursor-pointer mr-[1rem] flex gap-[1rem]'>
          <label className=' cursor-pointer' >Theme FAQ's</label>
            <label className=' cursor-pointer' >Need Helps</label>
            <div className='gap-[.2rem] cursor-pointer flex items-center'>
            <span>🏳️</span>
            <label>EN</label>
            </div>

            
            <div className='gap-[.2rem] cursor-pointer flex items-center' >
            <span>🏳️</span>
            <label>USD</label>
            </div>
            
          </div>
        
      </section>
    </>
  )
}

export default Head
