import React, { useState } from 'react'
import DekstopNav from './DekstopNav'
import MobileNav from './MobileNav'

function Header() {

    const menu = ['Receipes','Resourses','Contact','About']
    document.documentElement.classList.add('dark')
    const[flag,setFlafg] = useState(false)

    window.addEventListener('scroll',(e)=>{

          if(window.scrollY > 0)
            {
                setFlafg(true)
            }
            else
            {
              setFlafg(false)
            }

    })


  return (
    <div className={`fixed top-0 left-0 right-0 z-50 py-0 ${flag ? "dark transition-all ease-out duration-300 shadow-lg ":"bg-transparent transition-all ease-out duration-300"} `}>
            <div className='max-w-screen-xl md:mx-20 mx-10'>
                <div className='max-[550px]:hidden'>
                    <DekstopNav menu={menu} />
                </div>
                <div className='min-[550px]:hidden'>
                    <MobileNav menu={menu} />
                </div>
            </div>
    </div>
  )
}

export default Header
