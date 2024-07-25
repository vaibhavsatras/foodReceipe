import React from 'react'
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from 'react-router-dom';


function Card({data}) {

    
  return (
    <>
            <div className='bg-white shadow-xl mb-10 hover:transition-all duration-300 cursor-pointer' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">
                <div className='relative'>
                    <span className='capitalize absolute bg-slate-300 right-2 top-2 px-2 py-0.5 rounded-lg '>{data.more.map((data)=> data.difficulty)}</span>
                    <img src={data.thumbnail_image} alt="...img" className='rounded-t-lg h-[180px] w-[400px] object-cover' />
                    <div className='bg-white px-6 py-6'>
                        <span>{data.name}</span>
                        <div className='pt-5 flex justify-between'>
                            <Link to={`/product/${data._id}`}><div className='bg-orange-600 px-3 py-1 font-normal hover:bg-orange-400
                            transition-all ease-in-out  rounded-lg text-white'>View</div></Link>
                            <div className='flex items-center'>
                            <MdOutlineWatchLater />
                            <span className='ps-1'>{data.more.map((data)=> data.prep_time)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Card
