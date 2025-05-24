import React from 'react'
import Navbar from '../components/Navbar'
import Books from '../components/Books'
import Footer from '../components/Footer'
import list from "../../public/list.json"

function Book() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen' style={{paddingTop:'80px'}}>
    <Books/>
    </div>
    
    <Footer/>
      
    </>
  )
}

export default Book
