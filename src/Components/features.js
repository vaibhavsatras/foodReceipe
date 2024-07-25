import React from 'react'

function Features() {

    
  return (
    <>
            <div className='container max-w-screen-2xl md:px-20 px-14 flex md:flex-row flex-col mb-24'>
                <div className='md:w-[75%] w-[90%]'>
                        <div className='mt-20 relative' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                          <span className='absolute  left-7 px-2 py-0.5 text-sm md:text-lg  rounded-lg  bg-slate-200 z-50 top-2'>Recepie Features</span>
                            <img src="https://img.freepik.com/premium-photo/prawn-pulao-fragrant-rice-cooked-with-succulent-prawns-aromatic-spices-homemade_921026-50074.jpg?w=740"         
                            alt="...img"  className='h-[300px] w-[600px] object-cover rounded-xl translate-x-6 duration-200' />
                        </div>
                </div>
                <div className='md:w-1/2 w-[100%]'>
                        <div className='mt-20 flex-shrink'>
                            <h3 className='md:text-[38px] text-[25px] md:text-left text-center font-serif font-semibold' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">Pineapple + Smoked Jackfruit Pizza</h3>
                            <p className='mt-3 font-serif text-lg md:text-left text-center' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt quia quis omnis exercitationem consequatur quas at alias excepturi ducimus.</p>
                            <div className='md:mt-3 mt-4  w-[50%] mx-3 md:mx-0' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" >
                                <div className=' text-[16px] cursor-pointer w-[100%] mx-14 md:mx-0  bg-transparent text-black hover:text-white  py-2 md:px-6 px-3  rounded-lg hover:bg-green-600
                                  border-2 transition-all ease-in duration-300 text-center'>View Receipe</div>
                            </div>
                        </div>
                </div>
            </div> 
    </>
  )
}

export default Features
