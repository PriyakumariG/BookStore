import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <AuthProvider>
 <div className=' dark:bg-slate-900 dark:text-white'>
 <App />
 <Toaster/>
 </div>
 </AuthProvider>
 
 
 </BrowserRouter>
    
 
)
