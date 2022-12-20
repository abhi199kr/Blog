import React, { useState } from 'react'
import { useForm } from "react-hook-form";
// import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
// import {auth} from './Firebase'
import { Navigate,useNavigate } from 'react-router-dom';



const Alogin= () => {
  const [password,npassword]=useState()
  const [email,setemail]=useState()
  const [cpassword,copassword]=useState()
  const [unshow,show]=useState(true)
  const [error,setError]=useState('')
  const [allentry ,setallentry]=useState([])
  const [login ,islogin]=useState(false)
  const navi=useNavigate()
  
    const { register, handleSubmit, formState: { errors } ,watch} = useForm();
const handlelogin = (data) =>
{
    data.preventDefault();
    console.log("Data");
    console.log(password)

    // signInWithEmailAndPassword(auth, email,password)
    // .then(() => {
    //   if(!auth.currentUser.emailVerified) {
    //     sendEmailVerification(auth.currentUser)
    //     .then(() => {
            
    //         console.log("errors")
    //         // console.log("Login succssfully")
    //         //     alert('login')
    //         //     islogin(true)
    //         //     navi('/')
        
         
          
    //     })
    //   .catch(err => console(err.message))
    // }
    // else{
       
    //    // redirect to code comes hear     
    //         console.log("Login succssfully")
    //             alert('login')
    //             islogin(true)
    //             navi('/')
    //         // console.log("errors")
    //         // console.log("Email or password is wrong")
        
        
    // }
    // })
    // .catch(err => alert("Wrong email or  password"))

}

    
  return (
    <div className='bg-dark'>
    <div className='d-flex justify-content-center main'>
      
    <div className="signup-boxl  ">
      <h1>Admin Login</h1>
      
      <form onSubmit={handlelogin}>
        
        <label className='h5' htmlFor="">
          Email
        </label>
        <input type="email"  name="email" 
        
          onChange={e=>setemail(e.target.value)}
     />
         {errors.email && <span className='text-danger h6' role="alert">{errors.email.message} <span className='text-danger h6'>email is required</span></span>}
       

        <label className='h5'>Password</label>
       <input type="password" id="p1" 
       onChange={e => {
        npassword(e.target.value)
    
}}/>
       
       
     
     
      
        
     




       
     
      <div className='text-center'>  <button type='submit' className='mt-3  sub'>Submit</button></div>

     
     </form>
   
    </div>
   
  

      

    </div>
    </div>
  )
}

export default Alogin


