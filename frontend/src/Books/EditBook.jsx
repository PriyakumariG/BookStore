 import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';  // import toast

function EditBook() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [desc, setDesc] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4001/getbooks/' + id)
      .then(result => {
        setName(result.data.name);
        setTitle(result.data.title);
        setPrice(result.data.price);
        setCategory(result.data.category);
        setImage(result.data.image);
        setDesc(result.data.desc);
      })
      .catch(err => {
        console.error(err);
        toast.error("Failed to load book data", { duration: 4000 });
      });
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:4001/updatebook/" + id, { name, title, price, category, image ,desc })
      .then(result => {
        toast.success("Book updated successfully!", { duration: 4000 });
        navigate('/');
      })
      .catch(err => {
        console.error("Error updating book:", err);
        toast.error("Failed to update book", { duration: 4000 });
      });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-20 px-4">
        <div className="max-w-xl mx-auto p-6 border rounded-xl shadow-md dark:bg-slate-900 dark:text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Update Book 📝</h2>
          <form onSubmit={Update} className="space-y-4">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Book Name" className="w-full p-2 border rounded-md dark:bg-slate-800" />
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Author Name" className="w-full p-2 border rounded-md dark:bg-slate-800" />
            <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price" className="w-full p-2 border rounded-md dark:bg-slate-800" />
            <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" className="w-full p-2 border rounded-md dark:bg-slate-800" />
            <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" className="w-full p-2 border rounded-md dark:bg-slate-800" />
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)}  placeholder="Enter a detailed description" className="w-full p-2 border rounded-md dark:bg-slate-800 h-24 resize-none"/>
            <button className="w-full py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Update</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditBook;
