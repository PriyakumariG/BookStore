import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit= async(data) => 
    {
      const userInfo={
        phone:data.phone,
        email:data.email,
        password:data.password
      }
       await axios.post("http://localhost:4001/user/login",userInfo)
      .then((resp)=>{
        console.log(resp.data)
        if(resp.data){
          toast.success('Login successfully');
          document.getElementById("my_modal_3").close();
          setTimeout(()=>{
            
            window.location.reload();
            localStorage.setItem("user",JSON.stringify(resp.data));
           },1000);
                }
         
      }).catch ((error) =>{
         if(error.response){
          console.log(error)
          toast.error("Error:" +error.response.data.message);
          setTimeout(()=>{ },2000)
         }
        })
  };


  return (
    <div>
     <dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <a href='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=> document.getElementById("my_modal_3").close()}>✕ </a>
     
    <h3 className="font-bold text-lg">Login</h3>
     <div className='mt-4 space-y-2'>
      <span> Email </span><br/>
      <input {...register("email", { required: true })}  type='email' placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'/><br/>
      {errors.email && <span  className='text-sm text-red-500 '>This field is required</span>}
     </div>
 

  <div className='mt-4 space-y-2'>
      <span> Password </span><br/>
      <input {...register("password", { required: true })} type='password' placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'/><br/>
      {errors.password && <span className='text-sm text-red-500 '>This field is required</span>}
     </div>

     <div className='flex justify-around mt-4'>
      <button className='bg-yellow-500 text-white rounded-md px-3 py-1 hover:bg-yellow-600 duration-200  ' >Login</button>
      <p>Not registered ? <Link to='/signup' className='underline text-blue-500 cursor-pointer'>SignUp</Link></p>
     </div>
     </form>
  </div>
  
</dialog>
    </div>
  )
}

export default Login
