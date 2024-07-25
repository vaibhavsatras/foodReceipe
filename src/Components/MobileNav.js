import React, { useState } from 'react'
import logo from '../images/logo.png'
import { FaBarsStaggered } from "react-icons/fa6";
import {FaArrowRightLong} from 'react-icons/fa6'
import {Link,useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import SigninMobileView from './signinMobileView';
import SignUpMobileView from './signUpMobileView';

function MobileNav({menu}) {

  const[flag,setFlag] = useState(false)
  const auth = Cookies.get('token')

  //Logout
  function LogOut()
  {
      Cookies.remove('token')

      if(!auth)
      {
          navigate('/signIn')
      }
      else
      {
          navigate('/')
      }
      
  }

  //Logout

  const navigate = useNavigate()

  function LogOut()
  {
      Cookies.remove('token')

      if(!auth)
      {
          navigate('/signIn')
      }
      else
      {
          navigate('/')
      }
      
  }


  function openMenu()
  {
    setFlag(true)
  }
  function closeMenu()
  {
    setFlag(false)
  }
  
  return (
    <>
        <div className='pt-3 flex justify-between items-center'>
            <span>
            <Link to={'/'}><img src={logo} className='h-[80px] w-[80px] rounded-full' alt="...img" /></Link>
            </span>
            <div>
              <button onClick={openMenu}>
              <FaBarsStaggered className={`text-lg ${flag ? "hidden transition-all duration-300" :"transition-all duration-300"}`} />
              </button>
            </div>
          <div className={`fixed ${flag ? "visible-menu":"invisible-menu"} transition-all duration-700`}>
          <button onClick={closeMenu}>
              <FaArrowRightLong className='text-2xl font-normal ms-5 mb-8'/>
              </button>
           {
            auth ?
            <>
             <ul className='flex flex-col absolute right-5 pt-2 pe-5 top-16 gap-4 text-left'>
             {
               menu.map((item,idx)=>{
                 return(
                 <div key={idx}>
                     <Link to={item}><li className='cursor-pointer text-lg'>{item}</li></Link>
                 </div>)
               })
             }
           </ul>
           <div className='relative'>
           <ul className='flex gap-6 text-lg absolute top-44 left-12 px-2'>
               <li className='cursor-pointer'><button onClick={LogOut}>Log Out</button></li>
           </ul>
           </div>
       </>
           :
           <>
            <ul className={`absolute ${auth ?"top-48":"top-5"} left-10 flex flex-col gap-5 px-2 py-10 justify-center items-center `}>
            <li className='border-2 w-24 text-center text-black rounded-xl px-4 py-2 text-sm hover:bg-blue-500 hover:text-white' onClick={()=>document.getElementById('my_modal_2_1').showModal()}>Login </li>
            <li className='border-2 w-24 text-center text-black rounded-xl  px-2 py-2 text-sm hover:bg-blue-500 hover:text-white' onClick={()=>document.getElementById('my_modal_1_1').showModal()}>Sign Up</li>
          </ul>
          <SigninMobileView/>
          </>
           }
           
          </div>
        </div>
        <SignUpMobileView/>
    </>
  )
}

export default MobileNav
