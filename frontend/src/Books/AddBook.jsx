import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function AddBook() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [desc, setDesc] = useState('');
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios.post("https://bookstorebackend-s0nf.onrender.com/books", { name, title, price, category, image,desc})
      .then(result => {
        toast.success("Book added successfully!");
        navigate('/');
      })
      .catch(err => {
        console.error("Error adding book:", err);
        toast.error("Failed to add book. Please try again.");
      });
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-right" />
      <div className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-20 px-4">
        <div className="max-w-xl mx-auto p-6 border rounded-xl shadow-md dark:bg-slate-900 dark:text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Add a New Book</h2>
          <form onSubmit={Submit} className="space-y-4">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Book Name (Title) " className="w-full p-2 border rounded-md dark:bg-slate-800" />
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Author Name" className="w-full p-2 border rounded-md dark:bg-slate-800" />
            <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price" className="w-full p-2 border rounded-md dark:bg-slate-800" />
            <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" className="w-full p-2 border rounded-md dark:bg-slate-800" />
            <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" className="w-full p-2 border rounded-md dark:bg-slate-800" />
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)}  placeholder="Enter a detailed description" className="w-full p-2 border rounded-md dark:bg-slate-800 h-24 resize-none"/>
            <button type="submit" className="w-full py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Add Book</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddBook;
