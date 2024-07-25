import React from 'react'
import { Link } from 'react-router-dom'


function CatageoryNav() {

const catageories = ['Breakfast','Entrees','Lunch','Desserts','Sides','Drinks']

  return (
    <>
         <div className='max-w-screen-2xl md:mx-20 mx-10  '>
                
            <ul className='mt-10 gap-5 md:gap-16 md:w-[60%] w-[80%] grid md:grid-cols-6 grid-cols-2 mx-auto'>
                {

                    catageories.map((menu)=>{

                        return(
                        <>
                        <Link  to={`/catageory/${menu}`} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" className=' border-2 bg-orange-200 text-center py-1.5 rounded-3xl md:w-[100px] w-[120px]'>
                        <li>{menu}</li>
                        </Link>
                        </>
                        )

                    })

                }
            </ul>

        </div>
    </>
  )
}

export default CatageoryNav
