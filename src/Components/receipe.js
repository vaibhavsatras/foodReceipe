import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Card from './card'
import Cookies from 'js-cookie'

function Receipe() {

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

    function getData()
    {
        fetch('http://localhost:8000/products',{

        }).then((products)=>{

                return products.json()

        }).then((item)=>{

           setData(item)

        })
    }

    useEffect(()=>{

        getData()

    },[])

   

  return (
    <>
        <div className='container max-w-screen-2xl md:px-28 px-14 md:mb-28 mb-10 '>
            <h3 className='text-2xl font-serif font-semibold md:mx-0 mx-2 md:text-left text-center'
             data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">Latest Receipe</h3>
            <div className='mt-8'>
                <ul className='grid md:grid-cols-4  grid-cols-1 md:gap-6 mt-5 md:mb-5 '>
                    {
                      data.length > 0 ? data.slice(0,4).map((product,idx)=>{

                            return(
                            <div key={idx}>  
                                <Card data={product} />
                            </div>)

                      }) : 
                      <>
                        <span>

                           <h3 className='text-2xl font-serif font-semibold md:mx-0 mx-2 mt-[10%]  text-center'>
                           <span className="loading loading-spinner loading-lg"></span>
                          </h3>
                        </span>
                      </>
                    }
                </ul>
                <div className='md:mt-3 mt-3 w-[50%] mx-2 md:mx-auto md:w-[20%]' data-aos="zoom-in"  data-aos-duration="1000" data-aos-delay="600" >
                   <div className=' text-[16px] cursor-pointer w-[100%] mx-14 md:mx-0  bg-transparent text-black hover:text-white  py-2 md:px-6 px-3  rounded-lg hover:bg-green-600
                                  border-2 transition-all ease-in duration-300 text-center'>View Receipe</div>
                 </div>
            </div>
        </div> 
    </>
  )
}

export default Receipe
