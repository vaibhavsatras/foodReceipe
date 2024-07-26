import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {

    const {handleSubmit,register,formState:{errors},reset} = useForm()
    const[flag,setFlag] = useState(false)
    const navigate = useNavigate()

    function ForGotPassword(data)
    { 
      
         fetch('https://receipe-backend.vercel.app/user/forgotPassword',{

            method: 'POST',
            headers:{

              'Content-Type':'application/json'

            },
            body: JSON.stringify(data)


         }).then((result)=>{

            return result.json()

         }).then((user)=>{

            if(user.result)
            {
              alert(user.result)
            }
            else if(user.error)
            {
              alert(user.error)
            }

         })

        reset()
    }


  return (
    <>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box bg-white rounded-lg shadow relative dark:bg-white">

        <form method="dialog" >
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl text-black mt-2 me-3">✕</button>
      </form>
        <form className="space-y-6 px-6 lg:px-2 mx-auto w-[75%] pb-4 sm:pb-6 xl:pb-8" onSubmit={handleSubmit(ForGotPassword)}>

                    <h3 className="text-lg font-medium text-black dark:text-black">Forgot Password</h3>

                    <div >
                        <label htmlFor="email"  className="text-sm text-start font-medium text-black block mb-1 dark:text-black">Your email</label>
                       <div className='relative flex items-center'>
                        
                       <IoMdMail className='absolute ps-2 text-2xl text-gray-500'  />

                       <input type="email" name="email"  className="bg-gray-50 border ps-9 outline-none
                         border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="Enter Email Address"

                         {...register('email',{
                          required: 'Please Enter The Email Address',
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
                        <label htmlFor="password"  className="text-sm text-start font-medium text-black block mb-1 dark:text-black">Password</label>
                       <div className='relative flex items-center'>
                       <RiLockPasswordFill className='absolute text-lg left-2 text-gray-500' />

                       <input type={flag ? "text":"password"} name="password"  className="bg-gray-50 border ps-9  outline-none
                         border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" 
                         placeholder="Enter New password" 

                         {...register('password',{
                            required: 'Please Enter The Password',
                            pattern:{
                              value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                              message:'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
                            }
                          })}

                         />
                         {
                          flag ? 
                          <FaEye className='absolute right-5 text-lg text-gray-500 cursor-pointer' onClick={()=>setFlag(!flag)} />:
                         <FaEyeSlash className='absolute right-5 text-lg text-gray-500 cursor-pointer' onClick={()=>setFlag(!flag)} />

                         }
                       </div>
                         {
                          errors.password && <small className="ms-2 mt-1 text-start font-medium text-red-700 dark:text-red-700 block mb-2 ">{errors.password.message}</small>
                         }
                    </div>
                    <div>
                        <label htmlFor="newPassword"  className="text-sm text-start font-medium text-black block mb-1 dark:text-black">Confirm Password</label>
                        <div className='relative flex items-center'>
                        <RiLockPasswordFill className='absolute text-lg left-2 text-gray-500' />

                        <input type="password" name="newPassword"  className="bg-gray-50 border ps-9  outline-none
                         border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" 
                         placeholder="Re-enter Password" 

                         {...register('newPassword',{
                            required: 'Please Re-Enter The Password',
                            pattern:{
                              value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                              message:'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
                            }
                          })}

                         />
                         
                        </div>
                         {
                          errors.confirmPassword && <small className="ms-2 mt-1 text-start font-medium text-red-700 dark:text-red-700 block mb-2 ">{errors.confirmPassword.message}</small>
                         }
                    </div>
  
                <div className='flex justify-between items-center'>
                <button className='border hover:bg-pink-600 border-pink-700 px-4 py-1 rounded-lg bg-pink-700 text-white'
                  type='submit'>Submit</button>
                </div>
                    
          </form>        
        </div>
      </dialog>
    
    </>

  )
}

export default ForgotPassword
