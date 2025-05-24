import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Contacts from './Contacts'

function Contact() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Contacts/>
    </div>
    <Footer/>
      
    </>
  )
}

export default Contact
