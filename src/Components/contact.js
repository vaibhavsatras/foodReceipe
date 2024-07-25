import React from 'react'

function Contact() {
  return (
    <>
        <div className='max-w-screen-2xl text-center mt-[10px] md:mt-[8%] md:px-52 px-10 mb-10'>
            
            <div className=' py-12'  data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">

           <div>
           <h3 className='text-2xl font-serif font-semibold md:mx-0 w-[100%] mx-auto mb-5 '>Sign up for my weekly newsletter!</h3>
           <div className='mb-8 text-gray-400 capitalize'>
           <p>Weekly emails with my latest receipes,cooking tipsand tricks and product recommendations!</p>
           <span>You'll be set in minutes.</span>
           </div>
           </div>

            <div className='flex md:flex-row flex-col justify-center md:ms-20  gap-7 md:gap-0 '>
                <div className='md:w-1/2 w-[100%] flex flex-col gap-7 justify-center items-center '>
                <input type="text" className=' outline-none md:w-[70%] w-[100%] px-3 py-1.5 rounded-lg' placeholder='Enter The Name' name='name' />
                <input type="email" className=' outline-none md:w-[70%] w-[100%] px-3 py-1.5 rounded-lg' placeholder='Enter The Mail' name='email' />
                </div>
                <div className='md:w-1/2 w-[100%] md:me-16 flex align-middle justify-center items-center'>
                    <textarea className=' outline-none md:w-[80%] w-[100%] md:h-[120px] p-3 rounded-lg resize-none' placeholder='Message' name="message" ></textarea>
                </div>
            </div>

            <div className='md:mt-6 mt-4 md:w-[20%] w-[60%] md:mx-auto mx-18' >
                <div className=' text-[16px] cursor-pointer  md:text-lg w-[100%] mx-14 md:mx-0  bg-transparent text-black hover:text-white  py-2 md:px-6 px-3  rounded-lg hover:bg-green-600
                 border-2 transition-all ease-in duration-300 text-center'>Get Startd</div>
              </div>
            </div>

        </div>
    </>
  )
}

export default Contact
