import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>    
            <div className='text-xl container max-w-screen-2xl w-[50%] mx-auto md:mt-[10%] mt-14 text-center pb-2'>
                    <h3 className='md:text-[30px] text-2xl md:pb-7 pb-5'>Opps.. Page Not Found</h3>
                    <Link to={'/'}><button className=' text-lg md:text-xl bg-blue-600 md:px-6 px-3 py-2  rounded-xl text-white hover:bg-blue-500 border-blue-600'>Back</button></Link>
            </div> 
    </>
  )
}

export default PageNotFound
