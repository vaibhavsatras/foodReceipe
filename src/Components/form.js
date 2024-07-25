// import React from 'react'
// import WithSignIn from './withSignin'
// import ForgotPassword from './forgotPassword'
// import { RiLockPasswordFill } from "react-icons/ri";
// import { IoMdMail } from "react-icons/io";
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";
// import {useForm} from 'react-hook-form'

// function Form(props) {

//     const {handleSubmit,register,formState:{errors}} = useForm()

    

//   return (
//     <>
//       <dialog id="my_modal_2" className="modal">
//         <div className="modal-box bg-white rounded-lg shadow relative dark:bg-white">

//         <form method="dialog" >
//       <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl text-black mt-3 me-3" onClick={()=>props.goPage()}>✕</button>
//       </form>
//         <form className="space-y-6 px-6 lg:px-2 mx-auto w-[75%] pb-4 sm:pb-6 xl:pb-8" onSubmit={handleSubmit((data)=>props.SubmitForm(data))} >
//                     <h3 className="text-lg font-medium text-black dark:text-black">Log In to our platform</h3>
//                     <div >
//                         <label htmlFor="email"  className="text-sm text-start font-medium text-black block mb-1 dark:text-black">Your email</label>
//                        <div className='relative flex items-center'>
                        
//                        <IoMdMail className='absolute ps-2 text-2xl text-gray-500'  />

//                        <input type="email" name="email"  className="bg-gray-50 border ps-9 outline-none
//                          border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="Email Address" 

//                           {...register('email',{
//                             required: 'Please Enter The Email Id',
//                             pattern:{
//                               value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//                               message:'Please Enter The Valid Maild Id'
//                             }
//                           })}

//                          />
//                        </div>
//                          {
//                           errors.email && <small className="ms-2 mt-1 text-start font-medium text-red-700 dark:text-red-700 block mb-2 ">{errors.email.message}</small>
//                          }
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="text-sm text-start font-medium text-black block mb-1 dark:text-black">Your password</label>

//                         <div className='relative flex items-center'>
//                         <RiLockPasswordFill className='absolute ps-2 text-2xl text-gray-500' />
//                         <input type={props.flag ? "text":"password"} name="password" className="bg-gray-50 border ps-9 outline-none
//                          border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="Password" 

//                           {...register('password',{
//                             required: 'Please Enter The Password',
//                             pattern:{
//                               value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
//                               message:'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
//                             }
//                           })}

//                          />
//                          {

//                             props.flag ? <FaEye className='absolute right-4 ps-2 text-2xl text-gray-500 cursor-pointer' onClick={()=>props.setFlag(!props.flag)} />:
//                             <FaEyeSlash className='absolute right-4 ps-2 text-2xl text-gray-500 cursor-pointer' onClick={()=>props.setFlag(!props.flag)} />

//                          }


//                         </div>
//                          {
//                           errors.password && <small className="ms-2 mt-1 text-start font-medium text-red-700 dark:text-red-700 block mb-2 ">{errors.password.message}</small>
//                          }
//                     </div>
  
//                 <div className='flex justify-between items-center'>
//                 <button className='border hover:bg-pink-600 border-pink-700 px-4 py-1 rounded-lg bg-pink-700 text-white'
//                   type='submit'>Submit</button>

//                   <span className='text-blue-700 hover:text-blue-500 transition-all ease-in-out duration-300 cursor-pointer' 
//                      onClick={()=>document.getElementById('my_modal_4').showModal()}
//                   >forgot password ?</span>
//                 </div>

//           </form>        
//         </div>
//         <ForgotPassword/>
//       </dialog>
    
//     </>
//   )
// }

// export default WithSignIn(Form)
