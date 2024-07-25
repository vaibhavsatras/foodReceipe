import React from 'react'
import logo from '../images/logo.png'

function Subscribe() {
  return (
    <>
        <div className=" bg-white w-[75%] mx-auto py-10 md:py-10 md:pb-2 shadow-lg">
            <div className="mx-auto max-w-7xl px-6 md:px-10 pb-16 flex md:flex-row flex-col items-center gap-12 ">
                   
                    <div className='md:w-1/2 w-[100%] '>
                    <div className='flex md:flex-row flex-col md:justify-center justify-start items-center gap-5'>
                    <img src={logo} className='h-[100px] w-[100px] rounded-full' alt="...img" />
                    <div className=' space-y-2 '>
                      <h3 className='text-2xl font-serif font-semibold text-center'>Subscribe to our newsletter.</h3>
                      <p className='text-center text-gray'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, quod.</p>
                    </div>
                    </div>
                    </div>
                   
                    <div className='md:w-1/2 w-[100%]'>
                    <div className='flex md:flex-row flex-col justify-center items-center md:justify-end w-[100%] gap-3'>
                        <input type="text" className='px-2 py-1 ms-2 flex justify-center items-center mt-3 md:w-[50%] outline-none border-2 rounded-lg' name='subscribe' placeholder='Enter Subscription' />
                        <div className='md:mt-3 mt-4 inline-flex mx-0'>
                                <div className=' text-[16px] cursor-pointer w-[100%] mx-14 md:mx-0  bg-transparent text-black hover:text-white  py-2 md:px-6 px-5  rounded-lg hover:bg-green-600
                                  border-2 transition-all ease-in duration-300 text-center'>Subscribe</div>
                            </div>
                    </div>
                    </div>
            </div>
            <hr />
        </div> 
       
    </>
  )
}

export default Subscribe
