import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/src/assets/images/logo.svg'
import { useState, useEffect } from 'react'
import './search.css'

const Search = ({CartItem}) => {
    window.addEventListener("scroll",function(){
        const search = document.querySelector('.search')
        search.classList.toggle('active', this.window.scrollY > 100)
    });

    
  const ai = 'absolute  sh p-[.5rem] max-[500px]:w-[20rem] w-[43rem] max-h-[30rem] item rounded-b-[.5rem]  bg-slate-300 '
  const oi = '   bg-slate-400 h-[0rem]'
   
    const [meals, setMeals] = useState([]);
    const [name,setName]=useState('')
    const [it,setIt]=useState()
    const [ic,setIc]=useState(oi) 

    

    const idata =  meals.map((item)=>{
            
        return(
          
          <Link onClick={"window.location.reload"}  to={`/detail/${item.idMeal}`} id={item.idMeal} className=' sh max-[500px]:w-[18rem]  w-[40rem] id gap-2 tracking-wide hover:bg-[#ff6c7d]  rounded-[.4rem] m-[.2rem] shadow-slate-500 shadow-sm z-[9999999] bg-slate-200 items-center p-[.5rem] flex  justify-left flex-row item-c h-auto text-slate-800 '>
    <Link onClick={"window.location.reload"}  to={`/detail/${item.idMeal}`}>
    <img className='z-[999999] i-img max-[500px]:w-[2.5rem] max-[500px]:h-[2.5rem] w-[5rem] h-[5rem] object-cover border-2 border-slate-700 rounded-[100%]' src={item.strMealThumb} alt=""/>
    </Link>
    <Link onClick={"window.location.reload"}  to={`/detail/${item.idMeal}`}>
    <p className=' z-[9999999] text-lg text-slate-900'>{item.strMeal}</p>
    </Link>
    
    </Link>
        )
          
        
    
        })
        // const input =event=>{
    
        //     setName(empty)
            
        //   }

    const type =event=>{
       
        setName(event.currentTarget.value);
        if(event.currentTarget.value==''){
            setIt()
        }
        setIt(idata)
        setIc(ai);
          
      }

    useEffect(()=>{
        fetchMeal();
       },[type])

    const fetchMeal = async()=>{
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        const {meals} = await api.json();
        if(meals[0].idMeal | meals[0]!==null){
            setMeals(meals);
            console.log(meals)
          }
        }

  return (
    <>
    <section className=' tracking-wider'>
        <div className='   gap-[1rem] search pb-[1.3rem] pt-[1.3rem]  max-[768px]:ml-[0rem]  ml-[0rem] flex justify-between w-[100%]'>
            <Link to={'/'} className=' ml-[1rem] w-[15%]'>
               <img className=' w-[3rem]' src={logo} alt=""/> 
            </Link>
            <div className='inp relative -z-1 max-[768px]:text-[.5rem] text-[1rem]   border-2 w-[70%] items-center flex'>
                <i className='opacity-60  pl-2 fa fa-search'></i>
                <input onChange={type} value={name} className='inp w-[100%] opacity-60  p-[.6rem]' type="text" placeholder='Search and hint enter....'/>
                <span className='flex items-center border-l-2 opacity-60 pl-[.2rem] h-[100%] text-center  border-slate-900 w-[20%]'>
                   <p> All Catergory</p></span>
                <div className={ic} >
                    {it}
                </div>
            </div>

            <div className=' mr-[1rem]  items-center gap-[2.5rem] flex'>
                <Link to={'/user'}>
                <i className=' bg-slate-300 h-[2rem] p-[.4rem]  text-center w-[2rem] rounded-[100%] fa fa-user'></i>
                </Link>
               
                <div className=' relative  '>
                    <Link className='' to={'/cart'} >
                        <i className=' bg-slate-300 h-[2rem] p-[.4rem]  text-center w-[2rem]   rounded-[100%] fa fa-shopping-bag'></i>
                        <span className=' bg-[#e94560] text-[12px] text-[#fff] rounded-[100%] align-middle text-center absolute top-[-10px] right-[0] w-[1.1rem] h-[1.1rem] ' >{CartItem.length === 0 ? "0" : CartItem.length}</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Search