import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    } 

        
});

const User = mongoose.model("User",userSchema);
export default User