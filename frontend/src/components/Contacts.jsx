import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post('http://localhost:4001/contact', data)  // <-- changed '/Contact' to '/contact'
      .then(response => {
        toast.success("Message submitted successfully!");
        setTimeout(() => {
          navigate('/');
        }, 2000);
      })
      .catch(error => {
        toast.error("Failed to submit message");
        console.error(error);
      });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="modal-box border-[2px] shadow-md-5 dark:bg-slate-900 dark:text-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg">Contact</h3>

          <div className='mt-4 space-y-2'>
            <span>Name</span><br />
            <input {...register("name", { required: true })} type='text' placeholder='Enter your name' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' />
            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
          </div>

          <div className='mt-4 space-y-2'>
            <span>Email</span><br />
            <input {...register("email", { required: true })} type='email' placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' />
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>

          <div className='mt-4 space-y-2'>
            <span>Message</span><br />
            <input {...register("message", { required: true })} type='text' placeholder='Type your message' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' />
            {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
          </div>

          <div className='flex justify-around mt-4'>
            <button type="submit" className='bg-yellow-500 text-white rounded-md px-3 py-1 hover:bg-yellow-600 duration-200'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
