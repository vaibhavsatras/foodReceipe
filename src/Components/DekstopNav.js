import React from 'react'
import logo from '../images/logo.png'
import {Link, useNavigate} from 'react-router-dom'
import SignUp from './signUp'
import SignIn from './signIn'
import Cookies from 'js-cookie'

function DekstopNav({menu}) {

    const auth = Cookies.get('token')
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
    
  return (
    <>
        <div className='flex justify-between items-center pt-1 '>
            <span>
                <Link to={'/'}><img src={logo} className='h-[80px] w-[80px] rounded-full' alt="...img" /></Link>
            </span>
           
           {
            auth  ? <>
                 <ul className='flex items-center gap-14'>
                {
                    menu.map((item,idx)=>{

                        return(
                        <div key={idx}>
                            <Link to={item}><li className='cursor-pointer text-lg'>{item}</li></Link>
                        </div>
                    )

                    })
                }
            </ul>
            <div>
                <ul className='flex gap-6 text-lg'>
                    <li className='cursor-pointer'><button onClick={LogOut}>Log Out</button></li>
                </ul>
            </div>
            </>:
            <div>
            <ul className='flex gap-6 text-lg'>
                <li className='cursor-pointer'><button onClick={()=>document.getElementById('my_modal_1').showModal()}>Sign Up</button></li>
                <li className='cursor-pointer'><button onClick={()=>document.getElementById('my_modal_2').showModal()}>Logn In</button></li>
            </ul>
            <SignIn/>
        </div>
        
           }
        </div>
        
        <SignUp/>
        
    </> 
  )
}

export default DekstopNav
