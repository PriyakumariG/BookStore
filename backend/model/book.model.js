import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String,
    desc:String,
})

const  Book=mongoose.model("books",bookSchema);
export default Book;