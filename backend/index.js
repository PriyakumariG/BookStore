import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";
import Book from "./model/book.model.js";
import Contact from "./model/contact.model.js";
import contactRoute from "./route/contact.route.js";

const app = express();

app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongodb 
app.use(cors());
 
mongoose.connect(URI)
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

// Existing routes below (unchanged except removed duplicate /Contact route)

app.post("/books", (req, res) => {
  Book.create(req.body)
    .then(books => res.json(books))
    .catch(err => res.json(err));
});

app.put('/updatebook/:id', (req, res) => {
  const id = req.params.id;
  Book.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      title: req.body.title,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
      desc: req.body.desc
    },
    { new: true }
  )
    .then(book => res.json(book))
    .catch(err => res.status(500).json(err));
});

app.get('/getbooks/:id', (req, res) => {
  const id = req.params.id;
  Book.findById({ _id: id })
    .then(book => res.json(book))
    .catch(err => res.status(500).json(err));
});

app.delete('/deleteBook/:id', (req, res) => {
  const id = req.params.id;
  Book.findByIdAndDelete(id)
    .then(deletedBook => {
      if (!deletedBook) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.json({ message: "Book deleted successfully", book: deletedBook });
    })
    .catch(err => {
      console.error("Delete error:", err);
      res.status(500).json({ message: "Failed to delete book", error: err });
    });
});

// Use other route files
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute); 

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
