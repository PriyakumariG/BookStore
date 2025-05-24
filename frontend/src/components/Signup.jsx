import React from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'
import Login from './login'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'

function Signup() {

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
           await axios.post("http://localhost:4001/user/signup",userInfo)
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
      <input  {...register("password", { required: true })}   type='password' placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'/><br/>
      {errors.password && <span  className='text-sm text-red-500 '>This field is required</span>}
     </div>

     <div className='flex justify-around mt-4'>
      <button className='bg-yellow-500 text-white rounded-md px-3 py-1 hover:bg-yellow-600 duration-200' >SignUp</button>
      <p className=' md:text-xl'>Have account? <a className='underline text-blue-500 cursor-pointer'
      onClick={()=> document.getElementById("my_modal_3").showModal()}>
      Login</a>
      <Login/></p>
     </div>
     </form>
  </div>
</div>
      </div>
    </>
  )
}

export default Signup
