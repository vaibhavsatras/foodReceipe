import React, { useEffect, useState } from 'react'
import Card from '../Components/card'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

function Recipies() {

  const[Data,setData]  = useState([])
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


    function getProduct()
    {
      fetch('http://localhost:8000/products',{

      }).then((data)=>{

          return data.json()

      }).then((products)=>{

          setData(products)
          setFlag(true)

      })
    }

useEffect(()=>{

    getProduct();

},[])

  return (
    <>  
            <div className='max-w-screen-2xl text-center mt-[28%] md:mt-[10%] md:px-auto px-10'>

            <h3 className='text-2xl font-serif font-semibold md:mx-0 mx-2  text-center'>All Receipes</h3>
            {
              flag ? <div className='container  max-w-screen-xl md:px-20 px-10 mx-auto grid md:grid-cols-4  grid-cols-1 md:gap-5 mt-16 mb-10 '>
              {
                 Data.map((data,idx)=>{

                    return(
                    <div key={idx}>
                    <Card data={data} key={data._id} />
                    </div>)

                })
              }
              
            </div>:
              <h3 className='text-2xl font-serif font-semibold md:mx-0 mx-2 mt-[10%]  text-center'>
                <span className="loading loading-bars loading-lg"></span>
              </h3>
            }

            </div>
    </>
  )
}

export default Recipies
