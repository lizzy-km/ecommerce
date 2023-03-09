import React, { useEffect, useState } from "react"
import ShopCart from "./ShopCart"
import "./style.css"

const Shop = ({ addToCart }) => {
   //_____________ set category__________________ //
const [categories, setCategories] = useState([]);
// set category //




//  get category data    //
useEffect(()=>{
        fetchData()
        fetchMeal();
       
    },[])
//  get category data    //

// Fetch all category with api //

const fetchData = async()=>{
        const api = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        const {categories} = await api.json()
        setCategories(categories);
        // console.log(categories)
    }

     // Fetch all category with api //

// default array data before get category name //
const def = 'Seafood';
// default array data before get category name//

// set array data before get category name //
const [CatName,setCatName] = useState(def)

const [Food, setFood]=useState()
// set array data before get category name //

// Fetch api data when setCatName //
useEffect(()=>{
        fetchMeal();
       },[CatName])
// Fetch api data when setCatName //

// Fetch food by category name with api //
const fetchMeal = async()=>{
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${CatName}`)
        const {meals} = await api.json();
        setFood(meals);
        console.log(meals)
        }

        const vsm = " w-[100%] justify-center items-center product-content max-h-[27rem] overflow-hidden flex-row gap-[1rem] flex flex-wrap"
        const vlg = " w-[100%]  justify-center items-center product-content max-h-[999999999rem] overflow-hidden flex-row gap-[1rem]  flex flex-wrap"
        const [vclc,setVclc]= useState(vsm)

        const view =()=>{
          setViewall(viewl)
          setVclc(vlg)
        }
        const less =()=>{
          setViewall(viewa)
          setVclc(vsm)
        }
        const viewa =<span className="  cursor-pointer" onClick={view} >View all</span>
        const viewl = <span className=" cursor-pointer" onClick={less} >View less</span>

        const[viewall,setViewall] = useState(viewa)

       

// Fetch food by category name with api //
  return (
    <>
      <section className='shop background'>
        <div className=' max-[500px]:flex max-[500px]:flex-col justify-between  flex flex-row'>
        <>
      <div className=' max-[500px]:h-[10vh] p-[.2rem] w-[18rem] bg-slate-200 h-[90vh]'>
        <div className='flex h-[3rem] pt-[1rem] text-2xl  flex-row justify-between'>
          <h1 className="pl-[.5rem] opacity-80 " >Menu </h1>
          <h1 className="pr-[.5rem] opacity-50 " >Shops </h1>
        </div>
        <div className='max-h-[27rem] max-[500px]:flex-row max-[500px]:max-h-[10rem] max-[500px]:w-[22rem]  p-[1rem] flex flex-col gap-[1rem]  overflow-auto'>
        {categories.map((value, index) => {
          return (
            <div 
            onClick={()=>{
              setCatName(value.strCategory)

          }}  
          key={index} id={value.idCategory}
             className=' max-[500px]:w-[6rem] w-[10rem] h-[4rem]  cursor-pointer border-transparent border-4 hover:border-b-[#ff6c7dbb] max-[500px]:flex-col max-[500px]:pl-[2rem] flex-row text-center justify-left  items-center  flex ' >
              <img className="mt-[.6rem] object-contain rounded-full h-[1.5rem] w-[1.5rem]'" src={value.strCategoryThumb} alt='' />
              <span className="  opacity-80 capitalize">{value.strCategory}</span>
            </div>
          )
        })}
        </div>
      
       
      </div>
    </>

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Foods</h2>
              </div>
              <div className='heading-right row '>
                 {viewall}
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className={vclc}>
            {Food?.map((shopItems, index) => {
        return (
              <ShopCart shopItems={shopItems} index={index} key={index} addToCart={addToCart}  />
              )
            })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
