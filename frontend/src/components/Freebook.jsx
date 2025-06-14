import axios from "axios"
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const resp = await axios.get("https://bookstorebackend-s0nf.onrender.com/book")
        setBook(resp.data.filter((data)=>data.category==="Free")) //filter the data from array
        console.log(resp.data.filter((data)=>data.category==="Free"))
        
      }
      catch(error){ 
         console.log(error)
      }
    }
    getBook();
  },[])
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
         <div>
         <h1 className=' font-semibold text-xl pb-2'>Free Offered Book</h1>
        <p>Start your reading journey at no cost - explore our collection of free books and discover knowledge, inspiration, and entertainment at no expense. ! </p>
        <p>Clicking on a book’s image will take you to a detailed page with more information about the book, including its title, description, and price. </p>
         </div>
       
      <div>
      <Slider {...settings}>
         {book.map((item)=>(
            <Cards item={item} key={item.id}/>
         ))}
      </Slider>
      </div>
      </div>
    </>
  )
}

export default Freebook
