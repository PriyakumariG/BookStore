import React from 'react'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import Book from './Books/Book'
import Signup from './components/Signup'
import Contact from './components/Contacts'
import { useAuth } from './context/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { Navigate } from 'react-router-dom'
import About from './components/About'; // Or your actual path
import AddBook from './Books/AddBook';  // Adjust the path if it's different
import EditBook from './Books/EditBook'
import Page from './components/Page'
import BookDetail from './Books/BookDetail'

function App() {
  const [authuser, setAuthUser] = useAuth()
  console.log(authuser);

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={authuser ? <Book /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact/>} />   
          <Route path="/about" element={<About />} />
          <Route path="/page" element={<Page />} />
          <Route path="/addbook" element={authuser ? <AddBook /> : <Navigate to="/signup" />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/book-detail/:id" element={<BookDetail/>} />   
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
