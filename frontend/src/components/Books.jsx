import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios"
function Books() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const resp = await axios.get("https://bookstorebackend-s0nf.onrender.com/book")
        setBook(resp.data)
        console.log(resp.data)
        
      }
      catch(error){ 
         console.log(error)
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
       <div className=' items-center justify-center text-center'>
        <h1 className=' text-2xl md:text-4xl'>We're delighted to have you <spam className="text-yellow-500"> Here ...! 🔖 </spam></h1>
        <p className='mt-12'>
           You're now logged in! You can update, delete, or add new books to your collection with just a few clicks. Manage your library with ease and keep your shelf up to date.
        </p>
        <p className='mt'>
           Clicking on a book’s image will take you to a detailed page with more information about the book, including its title, description, and price.
        </p>
        <Link to='/'> 
        <button className='mt-6 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 duration-300'>Back</button>
        </Link>
       </div>
       <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>

          {
             book.map((item)=>(
                <Cards key={item.id} item={item}/>
             ))
          }
    
       </div>
      </div>
    </>
  )
}

export default Books
