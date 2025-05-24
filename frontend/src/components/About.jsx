import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import aboutimg from '../../public/About.png'

function About() {
   return (
    <>
    <Navbar/>
     
     
     <main className="min-h-screen pt-19 pb-16 px-4 md:px-12 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
        
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
                       <div className='order-2  w-full md:w-1/2 mt-12 md:mt-30'>
                           <div className='space-y-8'>
                               <h1 className='text-4xl font-bold mb-6 text-center'><span className='text-yellow-500'>About Our Bookstore</span></h1>
                                <p className="text-lg leading-relaxed mb-4">
                                    Our bookstore is a haven for book lovers. We believe that a great bookstore should be more than just a place to buy books — it should be a space that fosters imagination, curiosity, and community.
                                </p>
                                <p className="text-lg leading-relaxed mb-4">
                                    We offer a wide selection of genres, from timeless classics to the latest bestsellers, as well as a curated collection of independent and local authors.
                                </p>
                                <p className="text-lg leading-relaxed mb-4">
                                    Our store includes a cozy reading corner, knowledgeable staff, and regular events like book signings, readings, and workshops.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Thank you for being a part of our community. Happy reading!
                                </p>
                              
                           </div>
                           
       
                       </div>
                       <div className='mt-12   order-1 w-full md:w-1/2 md:mt-30'> 
                         <img
                            src= {aboutimg}
                            alt="Books on shelf"
                            className="w-full max-w-md object-cover rounded-xl mt-6
               dark:shadow-lg  dark:shadow-yellow-100 
               transition-all duration-300"
                            />
                       </div>
                   </div>

      </main>

    
    
    <Footer/>
      
    </>
  )
}

export default About
