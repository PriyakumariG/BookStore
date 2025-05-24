import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthProvider'

function Cards({ item }) {
  const [authuser] = useAuth();
  const navigate = useNavigate();

const handleDelete = (id) => {
  if (!authuser) {
    toast.error("Please log in first to delete books");
    return;
  }

  if (window.confirm("Are you sure you want to delete this book?")) {
    axios.delete('https://bookstorebackend-s0nf.onrender.com/deleteBook/' + id)
      .then(response => {
        toast.success(response.data.message || "Book deleted successfully", { duration: 3000 });
        // Redirect to home page
        setTimeout(() => navigate("/"), 1000);
      })
      .catch(err => {
        toast.error("Failed to delete book", { duration: 4000 });
      });
  }
};


  const handleUpdateClick = (id) => {
    if (!authuser) {
      toast.error("Please log in first to update books");
      return;
    }
    navigate(`/edit/${id}`);
  };

  return (
    <> 
     
    <div className='mt-4 my-3 p-3'>
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
       <figure>
        <Link to={`/book-detail/${item._id}`}>
          <img src={item.image} alt="Book" className="cursor-pointer w-full h-35 object-cover" />
        </Link>
      </figure>

        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            {item.price === 0 && <div className="badge badge-secondary bg-yellow-500 text-black">FREE</div>}
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="flex gap-2">
              
              <button
                onClick={() => handleUpdateClick(item._id)}
                className="text-sm bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="text-sm bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cards;
