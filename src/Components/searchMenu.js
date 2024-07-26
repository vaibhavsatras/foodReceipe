import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {IoSearchOutline} from 'react-icons/io5'
import Card from './card'
import Cookies from 'js-cookie'

function SearchMenu() {

  const[serachText,setSearchText] = useState('')
  const[data,setData] = useState([])

  const navigate = useNavigate()
  const auth = Cookies.get('token')

  function Auth()
  {
    if(!auth)
      {
          navigate('/')
      }
      
  }

  useEffect(()=>{
    Auth()

  },[])


  function searchItem()
  {

    fetch(`https://receipe-backend.vercel.app/searchProducts/${serachText}`,{

      
      headers:{

        authorization: JSON.parse(Cookies.get('token'))

      },

    }).then((data)=>{

          return data.json()

    }).then((product)=>{

      setData(product)
    })
  }

  useEffect(()=>{

    searchItem()

  },[serachText])

  return (
    <>
            <div className='max-w-screen-2xl  mt-[10%] md:px-0  px-10 '>
              <div className='text-center'>
              <h3 className='text-3xl font-medium'>Search</h3>
  
                    <div className='mt-10 relative flex justify-center items-center '>
                        <IoSearchOutline className='absolute top-2.8 left-1 md:left-[30%] text-gray-400 ms-2 '/>
                        <input type="search" placeholder='Search' className='border-none outline-none w-[100%] m-auto md:w-[40%] px-10 py-2
                         placeholder:text-gray-300 placeholder:text-left
                        rounded-lg
                        ' onChange={(e)=>setSearchText(e.target.value)} />
                    </div>
              </div>
                  
                  <ul className='container max-w-screen-xl md:px-20 px-10 mx-[5%] grid md:grid-cols-4  grid-cols-1 md:gap-5 mt-14 mb-10 '>
                    {
                      data.map((item,idx)=>{

                          return(
                          
                          <li key={idx}>  
                           <Card data={item} key={item._id} />
                          </li>)

                      })
                    }
                  </ul>

            </div>
    </>
  )
}

export default SearchMenu
