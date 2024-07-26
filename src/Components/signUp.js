import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import SignIn from './signIn'
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



function SignUp() {


  const navigate = useNavigate()
    
    const {handleSubmit,register,formState:{errors},reset} = useForm()
    const[flag,setFlag] = useState(false)

    function SignupForm(data)
    {
      fetch('https://receipe-backend.vercel.app/user/signUp',{

        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },

        body: JSON.stringify(data)

      }).then((user)=>{

        return user.json()

      }).then((data)=>{

      if(data.result)
      {
        alert(data.result)
      }
      else if(data.error)
      {
        alert(data.error)
      }


      })
      reset()
    }
  

  return (
    <>
        <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box  bg-white rounded-lg shadow relative dark:bg-white">

        <form method="dialog" >
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-lg text-black mt-3 me-3 ">✕</button>
    </form>

        <form className="space-y-5 px-6 lg:px-2 mx-auto w-[75%] pb-4 sm:pb-6 xl:pb-8 overflow-y-hidden" onSubmit={handleSubmit(SignupForm)} >
                    <h3 className="text-lg font-medium text-black dark:text-black">Sign Up to our platform</h3>

                    <div>
                        <label htmlFor="name" className="text-sm text-start font-medium text-black block mb-1 dark:text-black">Your Name</label>
                        
                        <div className='relative flex items-center'>
                        <IoMdPerson className='text-lg absolute left-2 text-gray-500' />

                        <input type="name"  name className="bg-gray-50 border  ps-9 outline-none
                         border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                          placeholder="Please Enter Name" 

                          {...register('name',{
                            required: 'Please Enter The Name',
                            minLength:{
                              value: 8,
                              message:'Please Enter The Min-8 Character'
                            }
                          })}

                         />
                        </div>
                         {
                          errors.name && <small className="ms-2 mt-1 text-start font-medium text-red-700 dark:text-red-700 block mb-2 ">{errors.name.message}</small>
                         }
                    </div>

                    <div>
                        <label htmlFor="email" className="text-sm text-start font-medium text-black block mb-1 dark:text-black">Your email</label>
                       <div className='relative flex items-center'>
                       <MdEmail className='absolute left-2 text-lg text-gray-500' />

                       <input type="email"  name className="bg-gray-50 border  ps-9 outline-none
                         border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                          placeholder="Please Enter Email Address" 

                          {...register('email',{
                            required: 'Please Enter The Email Id',
                            pattern:{
                              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message:'Please Enter The Valid Maild Id'
                            }
                          })}

                         />
                       </div>
                         {
                          errors.email && <small className="ms-2 mt-1 text-start font-medium text-red-700 dark:text-red-700 block mb-2 ">{errors.email.message}</small>
                         }
                    </div>
                    <div>
                        <label htmlFor="phone" className="text-sm text-start font-medium text-black block mb-1 dark:text-black">Your phone</label>
                       <div className='relative flex items-center'>
                       <MdOutlinePhoneAndroid className='absolute left-2 text-lg text-gray-500' />

                         <input type="phone"   placeholder="+91 9765592502" className=" outline-none bg-gray-50 border ps-9 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"

                           {...register('phone',{

                            required:'Please Enter The Phone Number',
                            minLength:{
                              value:10,
                              message:'Please Enter 10-Digit Number'
                            },
                            maxLength:{
                              value:10,
                              message: 'Number is Not More than 10-Digit '
                            }
                           })}
                        />
                       </div>
                        {
                          errors.phone && <small className="ms-2 mt-1 text-start font-medium text-red-700 dark:text-red-700 block mb-2">{errors.phone.message}</small>
                        }
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm text-start font-medium text-black block mb-1 dark:text-black">Your password</label>
                        <div className='relative flex items-center'>
                        <RiLockPasswordFill className='absolute text-lg left-2 text-gray-500' />
                        <input type={flag ?"text":"password"} className="bg-gray-50 border ps-9  outline-none
                         border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="Enter Password" 

                          {...register('password',{
                            required: 'Please Enter The Password',
                            pattern:{
                              value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                              message:'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
                            }
                          })}

                         />

                        {

                          flag ?<FaEye className='absolute right-5 text-lg cursor-pointer text-gray-500' onClick={()=>setFlag(!flag)} />: 
                          <FaEyeSlash className='absolute right-5 text-lg cursor-pointer text-gray-500' onClick={()=>setFlag(!flag)} />

                        }


                        </div>
                         {
                          errors.password && <small className="ms-2 mt-1 text-start font-medium text-red-700 dark:text-red-700 block mb-2 ">{errors.password.message}</small>
                         }
                    </div>
  
                    <div className='flex  justify-between items-center '>
                <button className=' border hover:bg-pink-600 border-pink-700 px-4 py-1 rounded-lg bg-pink-700 text-white'
                  type='submit'>Submit</button>

                  <span>have already user? <span className='ms-1 cursor-pointer text-blue-700 hover:text-blue-500 transition-all ease-in-out duration-150'  onClick={()=>document.getElementById('my_modal_2').showModal()}>Sign In</span></span>

                </div>
                <SignIn/>
          </form>

        </div>
      </dialog>
    </div>
    </>
  )
}

export default SignUp
