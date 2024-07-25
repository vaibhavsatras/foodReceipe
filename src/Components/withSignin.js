
import React, {useState } from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

function WithSignIn(OldComp){

    const navigate = useNavigate()
    const {reset} = useForm()
        const[flag,setFlag] = useState(false)
      
    return (props)=>{
        function SubmitForm(data)
        {
          
          fetch('http://localhost:8000/user/signIn',{
    
            method: 'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
          }).then((user)=>{
    
              return user.json()
    
          }).then((data)=>{
            
            if(data.token)
              {
                const value = JSON.stringify(data.token)
                Cookies.set('token',value,{secure:true, sameSite: 'strict',expires: 1 })
                navigate('/')
              }
              else 
              {
                alert('Please Enter Correct Password..')
              }
    
          })
    
          reset()
        }
      
        function goPage()
        {
          navigate('/')
        }
        
        return(
        
        <>
            <OldComp {...props} flag={flag} setFlag={setFlag} SubmitForm={(data)=>SubmitForm(data)} goPage={goPage}

            />
        </>)

    }

}

export default WithSignIn
