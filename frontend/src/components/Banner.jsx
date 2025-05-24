import React from 'react'
import banner from "../../public/Banner.jpg"
import { Link } from 'react-router-dom'
function Banner() {
    
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
                <div className='order-2  w-full md:w-1/2 mt-12 md:mt-32'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>Hello, Welcomes here to learn somthing <span className='text-yellow-500'> new everyday!!! </span></h1>
                        <p className='text-xl'>
                            Welcome to your ultimate destination for books that inform, inspire, and ignite the imagination. Whether you're seeking bestselling novels, academic resources, or the latest in self-development, our shelves are filled with stories and knowledge waiting to be explored. Dive into a world of endless learning and discovery !!!.
                        </p>
                       
                    </div>
                    <button className="btn mt-8 bg-yellow-500 hover:bg-yellow-500 hover:bg-yellow-600 duration-300"><Link to='/books'>Get Started</Link></button>

                </div>
                <div className='mt-12 md:mt-15 order-1 w-full md:w-1/2'> 
                 <img src={banner} alr=" "/>
                </div>
            </div>
        </>
    )
}

export default Banner
