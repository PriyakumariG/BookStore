import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthProvider'
import { API_URL } from '../config'

const STAR_CLIP = "polygon(50% 0%, 61% 20%, 82% 8%, 82% 30%, 100% 39%, 88% 55%, 100% 71%, 82% 74%, 82% 96%, 61% 82%, 50% 100%, 39% 82%, 18% 96%, 18% 74%, 0% 71%, 12% 55%, 0% 39%, 18% 30%, 18% 8%, 39% 20%)";

function Cards({ item }) {
  const [authuser] = useAuth();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (!authuser) {
      toast.error("Please log in first to delete books");
      return;
    }
    if (window.confirm("Are you sure you want to delete this book?")) {
      axios.delete(`${API_URL}/deleteBook/` + id)
        .then(response => {
          toast.success(response.data.message || "Book deleted successfully", { duration: 30000 });
          setTimeout(() => window.location.reload(), 1000);
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
      <div className="card w-full bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
       <figure className="w-full h-52 overflow-hidden relative">
        <Link to={`/book-detail/${item._id}`} className="w-full h-full block">
          <img src={item.image} alt="Book" className="cursor-pointer w-full h-full object-cover" />
        </Link>
        {item.price === 0 && (
          <div className="absolute -bottom-3 -right-3 w-[72px] h-[72px] -rotate-12 drop-shadow-lg">
            <div className="absolute inset-0 bg-black" style={{ clipPath: STAR_CLIP }} />
            <div className="absolute inset-[3px] bg-white" style={{ clipPath: STAR_CLIP }} />
            <div
              className="absolute inset-[6px] flex items-center justify-center bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500"
              style={{ clipPath: STAR_CLIP }}
            >
              <span className="rotate-12 text-black font-extrabold text-[11px] uppercase tracking-tight">
                Free
              </span>
            </div>
          </div>
        )}
      </figure>

        <div className="card-body">
          <h2 className="card-title flex-wrap">
            {item.name}
          </h2>
          <p>{item.title}</p>
          <div className="card-actions flex-wrap justify-between items-center gap-2">
            <div className="badge badge-outline">${item.price}</div>
            <div className="flex flex-wrap gap-2">
              
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