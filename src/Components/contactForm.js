import React from "react";
import {useForm} from 'react-hook-form'
import { MdEmail } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import Cookies from 'js-cookie'


function ContactForm() {

  const {handleSubmit,register,formState:{errors},reset} = useForm()

  function SubmitForm(data)
  {
    fetch('https://receipe-backend.vercel.app/addContact',{
      
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
        authorization: JSON.parse(Cookies.get('token'))
      },
      body:JSON.stringify(data)
    }).then((item)=>{

        return item.json()

    }).then((contact)=>{


        return contact
      
    })

    
    reset()
  }

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box  bg-white rounded-lg shadow relative dark:bg-white">

        <form method="dialog" >
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl text-black mt-3 me-3 ">✕</button>
    </form>

        <form className=" md:w-[75%] w-[100%] mx-auto space-y-6 px-6 lg:px-10 pb-4 sm:pb-6 xl:pb-8" onSubmit={handleSubmit(SubmitForm)} >
                    <h3 className="text-xl font-medium text-black dark:text-black">Contact to our platform</h3>
                    <div>
                        <label htmlFor="email" className="text-sm text-start font-medium text-black block mb-2 dark:text-black">Your email</label>
                       <div className="relative flex items-center">
                       <IoMdPerson className='text-lg absolute left-2 text-gray-500' />
                       <input type="email"   className="bg-gray-50 border outline-none ps-9
                         border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="name@company.com" 

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
                        <label htmlFor="phone" className="text-sm text-start font-medium text-black block mb-2 dark:text-black">Your phone</label>
                        <div className="relative flex items-center">
                        <MdEmail className='absolute left-2 text-lg text-gray-500' />

                          <input type="phone"   placeholder="+91 9765592502" className="bg-gray-50 border ps-9 border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5
                           dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"

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
  
                    <button type="submit" className="w-[75%] mx-auto flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-400 dark:focus:ring-orange-800">Contact</button>
                    
          </form>

        </div>
      </dialog>
    </div>
  );
}

export default ContactForm;
