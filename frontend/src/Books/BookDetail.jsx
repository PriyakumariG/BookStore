import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4001/getbooks/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.error("Failed to fetch book details:", err));
  }, [id]);

  if (!book) {
    return (
      <>
        <Navbar />
        <div className="py-24 px-4 text-center dark:bg-slate-900 dark:text-white">
          <p>Loading book details...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Content starts below the Navbar with space */}
      <div className="py-20 px-4 bg-white dark:bg-slate-900 dark:text-white min-h-screen">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          
          {/* Book Image */}
          <div className="w-full md:w-1/2">
            <img
              src={book.image}
              alt={book.name}
              className="rounded-xl shadow-md w-full object-contain max-h-[400px]"
            />
          </div>

          {/* Book Details */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">{book.name}</h2>
            <p className="text-xl font-semibold">{book.title}</p>
            <p className="text-lg"><strong>Category:</strong> {book.category}</p>
            <p className="text-lg"><strong>Price:</strong> {book.price === 0 ? "Free" : `$${book.price}`}</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 whitespace-pre-line">
              <strong>Description:</strong> {book.desc}
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default BookDetail;
