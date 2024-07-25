import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

function Resources() {

  const[blogs,setBlogs] = useState([])
  const[flag,setFlag] = useState(false)

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


  function getBlogs()
  {
    fetch('http://localhost:8000/blogs',{

      headers:{

        authorization: JSON.parse(Cookies.get('token'))

      },


    }).then((data)=>{

        return data.json()

    }).then((blog)=>{

          setBlogs(blog)
          setFlag(true)

    })
  }

  useEffect(()=>{

      getBlogs()

  },[])

  

  return (
    <>
            <div className='max-w-screen-xl container mt-[28%] md:mt-[10%] px-28 mx-auto'>

                <h3 className='text-center font-serif text-3xl font-semibold'>Resourses</h3>
                {
                  flag ? 
                <div className='container  max-w-screen-xl md:px-20  mx-auto grid md:grid-cols-4  grid-cols-1 md:gap-5 gap-8 mt-10 md:mt-16 mb-10'>

                  {
                    blogs.map((item,idx)=>{

                        return(
                        
                        <div key={idx}>

                            <div className='flex flex-col text-center'>
                              <img className='h-[100px] w-[100px] object-cover mx-auto' src={item.imageSrc} alt="...img" />
                              <div className='mt-3'>
                                <h3>{item.title}</h3>
                              <div>Date: {item.date}</div>
                              <div>Views : {item.views}</div>
                              <div>Catageory: {item.catageory}</div>
                              </div>
                            </div>

                        </div>)

                    })
                  }

            </div>
            :
            <h3 className='text-2xl font-serif font-semibold md:mx-0 mx-2 mt-[10%]  text-center'>
            <span className="loading loading-bars loading-lg"></span>
          </h3>
                }
                

            </div> 
    </>
  )
}

export default Resources
