import React,{useEffect} from 'react'
import { useLoaderData,useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

function Product() {
    
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

    const product = useLoaderData()

    const prep_time = product?.more.map((data)=>data.prep_time)
    const cook_time = product?.more.map((data)=>data.cook_time)

    const extendTime = (time)=>{
            time =  time[0].split(" ")
            time =  parseInt(time[0])
            return time

    }

    const total_time = extendTime(prep_time) + extendTime(cook_time)
    
  return (
    <>
        <div className='max-w-screen-2xl mt-[28%] md:mt-[10%] md:px-auto px-10'>
            <div className='bg-white py-10 px-6 md:w-[75%] w-[100%] mb-20  mx-auto shadow-lg'>
                <img src={product.thumbnail_image} alt="...img" className='h-[300px] w-[500px] mx-auto object-cover rounded-lg' />
                <div className='mt-5 px-6 space-y-5'>
                    <h3 className='text-xl font-semibold font-serif'>{product.name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, distinctio!</p>
                </div>
                <div className='px-6 mt-5 space-y-4 font-serif'>
                <h3 className='font-semibold'>Preparation time</h3>
                <ul className='space-y-2 px-5 list-disc'>
                    <li ><strong>Total</strong> :{total_time} minutes </li>
                    <li><strong>Preparation</strong> :{product?.more.map((data)=>data.prep_time)} </li>
                    <li><strong>Cooking</strong> : {product?.more.map((data)=>data.cook_time)} </li>
                </ul>
                </div>

            <div className='px-6 mt-5 space-y-4 font-serif'>
                <h3 className='font-semibold capitalize'>ingredients</h3>
                <div>
                    {
                        product.ingredients.map((ing,idx)=>{

                            return(
                            
                            <ul className=' px-5 list-disc' key={idx}>
                                <li><strong>{ing.name}</strong> : {ing.quantity} </li>
                            </ul>
                            )

                        })
                    }
                </div>
             </div>
             <div className='px-6 mt-5 space-y-4 font-serif'>
             <h3 className='font-semibold capitalize'>instructions</h3>
             <ul>
                <li>{product.instructions}</li>
             </ul>
             </div>
            </div>
            
        </div>
      
    </>
  )
}

export default Product
