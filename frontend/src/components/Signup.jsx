import React, { useState } from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'
import Login from './login'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'
import { API_URL } from '../config'

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || '/'
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit= async (data) => 
        {
          const userInfo={
            fullname:data.fullname,
            phone:data.phone,
            email:data.email,
            password:data.password
          }
           await axios.post(`${API_URL}/user/signup`,userInfo)
          .then((resp)=>{
            console.log(resp.data)
            if(resp.data){
              toast.success('SignUp successfully');
              navigate(from ,{replace:true});
              localStorage.setItem("user",JSON.stringify(resp.data));
            }
             
          }).catch ((error) =>{
             if(error.response){
              console.log(error)
              toast.error("Error:" +error.response.data.message);
             }
            })
      };
    
  return (
    <>
      <div >
      <div className="flex h-screen items-center justify-center ">
  <div className="modal-box border -[2px] shadow-md-5 dark:bg-slate-900 dark:text-white">
  <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
     
    <h3 className="font-bold text-lg">Signup</h3>

    <div className='mt-4 space-y-2'>
      <span>Name </span><br/>
      <input  {...register("fullname", { required: true })}  type='text' placeholder='Enter your fullname' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'/><br/>
      {errors.fullname && <span  className='text-sm text-red-500 '>This field is required</span>}
     </div>

     <div className='mt-4 space-y-2'>
      <span> Phone Number </span><br/>
      <input  {...register("phone", { required: true })}  type='tel' placeholder='Enter your phone number' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'/><br/>
      {errors.phone && <span  className='text-sm text-red-500 '>This field is required</span>}
     </div> 

     <div className='mt-4 space-y-2'>
      <span> Email </span><br/>
      <input  {...register("email", { required: true })}  type='email' placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'/>
      <br/>
      {errors.email && <span  className='text-sm text-red-500 '>This field is required</span>}
     </div>
 

  <div className='mt-4 space-y-2'>
      <span> Password </span><br/>
      <div className='relative w-80'>
        <input  {...register("password", { required: true })}   type={showPassword ? 'text' : 'password'} placeholder='Enter your password' className='w-full px-3 py-1 pr-10 border rounded-md outline-none dark:bg-slate-900 dark:text-white'/>
        <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300'>
          {showPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
              <line x1="1" y1="1" x2="23" y2="23"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          )}
        </button>
      </div><br/>
      {errors.password && <span  className='text-sm text-red-500 '>This field is required</span>}
     </div>

     <div className='flex justify-around mt-4 items-center'>
      <button className='bg-yellow-500 text-white rounded-md px-3 py-1 hover:bg-yellow-600 duration-200' >SignUp</button>
      <p className='md:text-xl'>Have account? <a className='underline text-blue-500 cursor-pointer'
      onClick={()=> document.getElementById("my_modal_3").showModal()}>
      Login</a></p>
     </div>
     </form>
     <Login/>
  </div>
</div>
      </div>
    </>
  )
}

export default Signup