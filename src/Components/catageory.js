import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import CatageoryNav from './catageoryNav'
import Card from './card';
import Cookies from 'js-cookie'


function Catageory() {


    const {cat} = useParams()

    const[item,setItem] = useState([]);

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


   function SearchMenu()
   {
    fetch(`https://vercel.com/vaibhavs-projects-eb3704a5/receipe-backend/catageory/${cat}`,{


    }).then((data)=>{

      return data.json()

    }).then((d)=>{

       setItem(d)

    })
   }

   useEffect(()=>{

    SearchMenu()

   },[cat])

   

  return (
    <>
            <div className='max-w-screen-2xl text-center mt-[15%] md:mt-[10%] md:px-auto px-10 '>
              <h3 className='text-2xl font-medium' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">{cat}</h3>
            </div>
            <CatageoryNav/>
            
              <div className='container  max-w-screen-xl md:px-20 px-10 mx-auto grid md:grid-cols-4 grid-cols-1 md:gap-5 mt-16 mb-10 '>
             {
                item.map((data,idx)=>{

                   return(
                   <div div key={idx}>
                   <Card data={data} key={data._id} />
                   </div>)

               })
             }
             
           </div>
           
    </>
  )
}

export default Catageory
