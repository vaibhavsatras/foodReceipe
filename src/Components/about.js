import React from 'react'

function About() {
  
  return (
    <>
            <div className='container max-w-screen-2xl md:px-28 px-14 mb-24 mt-[10px] md:mt-[8%]'>
               
                <div className='flex md:flex-row flex-col  justify-between'>
                <div className='md:w-1/2 w-[100%] order-2 md:order-1 text-center mt-16'>
                <div className=' flex-shrink'>
                            <h3 className='md:text-[35px] text-[25px] md:text-left text-center font-serif font-semibold' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">Pineapple + Smoked Jackfruit Pizza</h3>
                            <p className='mt-3 font-serif text-lg md:text-left text-center' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt quia quis omnis exercitationem consequatur quas at alias excepturi ducimus.</p>
                            <div className='md:mt-3 mt-4  w-[50%] md:mx-0 mx-3' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" >
                                <div className=' text-[16px] cursor-pointer w-[100%] mx-14 md:mx-0  bg-transparent text-black hover:text-white  py-2 md:px-6 px-3  rounded-lg hover:bg-green-600
                                  border-2 transition-all ease-in duration-300 text-center'>View Receipe</div>
                            </div>
                        </div>    
                </div>
                <div className='md:w-[75%] w-[90%] order-1 md:order-2'>
                        
                        <div className=' relative' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                            <img src="https://img.freepik.com/free-photo/medium-shot-woman-cooking-indoors_23-2148893954.jpg?t=st=1718293700~exp=1718297300~hmac=96abee1c0f6fbca38284a543bbd2b8a54893e4c2574d87ed757488ca1a8d08e8&w=740"         
                            alt="...img"  className='md:h-[400px] h-[300px] md:w-[800px] w-[600px] mt-5 md:mt-0 object-cover rounded-xl translate-x-6 duration-200' />
                        </div>
                </div>
                </div>
            </div> 
    </>
  )
}

export default About
