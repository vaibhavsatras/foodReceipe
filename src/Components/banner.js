import React from 'react'
import {IoSearchOutline} from 'react-icons/io5'


function Banner() {
  return (
    <>
        <div className='max-w-screen-2xl md:mx-20 mx-10 md:mt-[12%] mt-[30%]'>
                
                <div className='w-[90%] md:w-[30%] m-auto '>
                    <h3 className='text-center mt-10 md:mt-14 text-[30px] md:text-[30px] leading-9 md:leading-[50px]' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">A Blog Template made for Food <span className='text-orange-500'>Influencers</span></h3>
                    <form action={`/search`}>
                    <div className='mt-10 relative flex justify-center items-center '>
                        <IoSearchOutline className='absolute top-2.8 left-1 text-gray-400 ms-2 '/>
                        <input type="search" placeholder='Search' className='border-none outline-none w-[100%] px-10 py-2
                         placeholder:text-gray-300 placeholder:text-left
                        rounded-lg
                        ' />
                    </div>

                    </form>
                </div>

        </div>
    </>
  )
}

export default Banner
