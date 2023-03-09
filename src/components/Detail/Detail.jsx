
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {

const {id} = useParams();

const [Food, setFood]=useState({})

useEffect(()=>{
        fetchMeal();
              
    },[])

const fetchMeal = async()=>{
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const {meals} = await api.json();
        setFood(meals[0]);
        console.log(meals[0]);

    }

  

  return (
    <>
        <section className=' w-[100%] tracking-wider p-[2rem] items-center flex flex-col'>
           <div className=' felx flex-row w-[100%] justify-between items-center'>
           <h3 className=' border-b-2 text-center font-semibold text-2xl'> {Food.strMeal} </h3>
           <div className=' flex justify-between'>
           <h4 className='text-left text-[.8rem]   font-medium' >Country : {Food.strArea} </h4>
                    <h4 className=' text-right text-[.8rem]  font-medium' >Type : {Food.strCategory} </h4>
          
           </div>
                     </div>
                    <div className='flex relative z-[-2] w-[100%] items-center flex-col bg-slate-300  '>
                        <div className='flex '>
                        <img className='max-[750px]:left-[-4.3%]
                         blur-sm
                        absolute
                        z-[-1] 
                        left-[-1.3%] 
                        max-[750px]:top-[-1.7%] 
                        top-[-2.3%] 
                        p-[1rem] 
                        object-cover 
                        rounded-tl-[-2rem]  
                        w-[40rem] h-[22rem] max-[750px]:w-[13rem]
                        ' src={Food.strMealThumb} alt=""/>

                        
                        <div className=' bg-white min-[750px]:w-[20rem] w-[20rem] rounded-full flex items-center  h-auto'>
                        <img className=' p-[.5rem] object-cover  rounded-full w-[20rem] h-[20rem]' src={Food.strMealThumb} alt=""/>

                        </div>

                        <img className=' 
                        blur-sm 
                        left-[48.7%] max-[750px]:left-[45%]
                        top-[-2.3%]  max-[750px]:top-[-1.7%]
                        absolute 
                        z-[-1] 
                        p-[1rem] 
                        object-cover   
                        w-[40rem] h-[22rem] max-[750px]:w-[13rem]
                        ' src={Food.strMealThumb} alt=""/>

                        
                        </div>
                        
                    <div className=' mt-[3rem] max-[500px]:flex-col  flex flex-row'>
                  
                    <div className=' instru max-w-[40rem] overflow-scroll m-[1rem] whitespace-pre-wrap'><b className=' font-medium'>Instruction :</b>  {Food.strInstructions} </div>
                    <div className=' max-[500px]:ml-[1rem]  ml-[10rem] '><h1 className=' border-slate-400 text-center border-b-2 text-lg font-medium'>Ingredient </h1>
      <div className=' tracking-wide   pb-[.5rem] flex justify-between w-[15rem] gap-[1rem]'>
        <p>{Food.strIngredient1}</p>        <p>{Food.strMeasure1}</p>
      </div>
      <div className='flex  tracking-wide   pb-[.5rem] justify-between w-[15rem] gap-[1rem]'>
        <p>{Food.strIngredient2}</p>        <p>{Food.strMeasure2}</p>

      </div>
      <div className='flex  tracking-wide   pb-[.5rem] justify-between w-[15rem] gap-[1rem]'>
        <p>{Food.strIngredient3}</p>        <p>{Food.strMeasure3}</p>

      </div>
      <div className='flex  tracking-wide   pb-[.5rem] justify-between w-[15rem] gap-[1rem]'>
        <p>{Food.strIngredient4}</p>        <p>{Food.strMeasure4}</p>

      </div>
      <div className='flex  tracking-wide   pb-[.5rem] justify-between w-[15rem] gap-[1rem]'>
        <p>{Food.strIngredient5}</p>        <p>{Food.strMeasure5}</p>

      </div>
      <div className='flex  tracking-wide   pb-[.5rem] justify-between w-[15rem] gap-[1rem]'>
        <p>{Food.strIngredient6}</p>        <p>{Food.strMeasure6}</p>

      </div>
      <div className='flex  tracking-wide   pb-[.5rem] justify-between w-[15rem] gap-[1rem]'>
        <p>{Food.strIngredient7}</p>        <p>{Food.strMeasure7}</p>

      </div>
      <div className='flex  tracking-wide   pb-[.5rem] justify-between w-[15rem] gap-[1rem]'>
        <p>{Food.strIngredient8}</p>        <p>{Food.strMeasure8}</p>

      </div>
      <div className='flex  tracking-wide   pb-[.5rem] justify-between w-[15rem] gap-[1rem]'>
        <p>{Food.strIngredient9}</p>        <p>{Food.strMeasure9}</p>

      </div>
    </div>
                    </div>
                </div>
               
           
        </section>
    </>
  )
}

export default Detail