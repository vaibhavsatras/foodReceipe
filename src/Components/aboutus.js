import React, { useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

function Aboutus() {

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
    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" className="mb-28">

        <div className="flex flex-col gap-5">
        <h3 className='md:mt-[10%] mt-[28%] text-3xl text-center font-serif font-semibold '>About</h3>
        <p className="w-[50%] text-center mx-auto font-serif text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam neque animi excepturi ipsa cumque in veniam repellat incidunt numquam sit.</p>
        </div>
      
       <div className="relative min-h-[500px] opacity-85 max-w-[75%] md:mt-[5%] mt-[28%]  mx-auto bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat "
       
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
          
        <h1 className="text-3xl font-extrabold sm:text-5xl ">
        <span className="mb-2">Let us find your</span>

        <strong className="block font-extrabold text-rose-700"> Forever Home. </strong>
      </h1>

      <p className="mt-4 max-w-lg text-white mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>
          
          <div className="mt-8 flex flex-wrap gap-8 text-center justify-center">
        <Link
          to={'/'}
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </Link>

        <Link
          to={'/'}
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </Link>
      </div>

        </div>
      </div>
    </div>

    <div className="bg-white px-5 py-8 w-[75%] mx-auto mt-20 shadow-xl rounded-lg">
    <div className="flex justify-between items-center gap-12 mx-5">
      <span className="w-[60%]">We are team of developers with hundreds hours spend on coding, we create professional apps, webs.</span>
      <div>
        <button className="bg-orange-600 px-2 py-2 text-white rounded-lg hover:bg-orange-400 transition-all ease-in-out duration-300">Call now</button>
      </div>
    </div>
    </div>

    </div>
  );
}

export default Aboutus;
