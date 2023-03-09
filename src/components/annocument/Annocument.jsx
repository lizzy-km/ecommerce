import React, { useEffect, useState } from "react"

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  }
  const mystyle1 = {
    width: "68%",
    height: "340px",
  }

  //_____________ set category__________________ //
const [categories, setCategories] = useState([]);
// set category //


const [count,setCount]=useState(0)

const clk =()=>{
  setCount(count + 1)
}
//  get category data    //
useEffect(()=>{
        fetchData()
        // fetchMeal();
       
    },[count])
//  get category data    //

// Fetch all category with api //

const fetchData = async()=>{
        const api = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        const {meals} = await api.json()
        setCategories(meals[0]);
        console.log(meals)
    }


  return (
    <>
      <section className='annocument background'>
        <div className='container p-[1rem] bg-slate-300 d_flex'>
          <div id={count}  className='img' style={mystyle}>
            
            <img  className=" w-[20rem] object-cover" src={categories.strMealThumb}  />
             
            
          </div>
          <div id={count}  className='img' style={mystyle1}>
            <img  className=" h-[20rem] w-[50rem] object-cover" src={categories.strMealThumb}  />
          </div>
          <div className=" w-[1.5rem] text-[1.8rem] flex items-center justify-center cursor-pointer opacity-70 bg-slate-400" onClick={clk}>
            <p> ></p>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument
