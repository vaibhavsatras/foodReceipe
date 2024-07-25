import React,{useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import ContactForm from './contactForm'
import Cookies from 'js-cookie'

function Contactus() {

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

  return (
    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" >
       <div className="relative min-h-[500px] max-w-[75%] mx-auto bg-gray-900  md:mt-[10%] mt-[28%]"
       
       >
      <div className="absolute inset-x-0 bottom-0 bg-transparent">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl text-center space-y-8">
          
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl ">
        <span className="mb-2">Let us find your</span>

        <strong className="block font-extrabold text-rose-700"> Forever Home. </strong>
      </h1>

      <p className="mt-4 max-w-lg text-white mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>
          
          <div className="mt-8 flex flex-wrap gap-8 text-center justify-center">
        <button
          
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          onClick={()=>document.getElementById('my_modal_3').showModal()}
        >
          Contact
        </button>
        <Link
          to={'/'}
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Back
        </Link>
        
      </div>
      <ContactForm/>
        </div>
      </div>
    </div>
    
    </div>

  )
}

export default Contactus
