import User from "../model/user.model.js"
import bcryptjs from "bcryptjs"

export const signup=async(req,resp)=>{
    try{
      const {fullname,email,phone,password}=req.body;
      const user=await User.findOne({email});
      if(user){
        return resp.status(400).json({message:"User already exists"})
      }
      const hashPassword= await bcryptjs.hash(password,10)
      const createdUser=new User({
                     fullname:fullname,
                      email:email,
                      phone:phone,
                      password:hashPassword,
      });
       await createdUser.save();
      resp.status(201).json({message:"User created successfully",
        user: {
            _id:createdUser._id,
            fullname:createdUser.fullname,
            phone:createdUser.phone,
            email:createdUser.email,
            
        }
      })
    }
    catch(error){
   console.log("Error"+error.message)
   resp.status(500).json({message:"Internal server error"})

    }
};

export const login=async(req,resp)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        const isMatch=await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return resp.status(400).json({message:"Invalid email or password"})
        }
        else{
            return resp.status(200).json({message:"Login successfull",
            user:{
               _id:user._id,
                fullname:user.fullname,
                email:user.email,
                phone:user.phone,
            }})
        }

    }
    catch(error){
     console.log("Error"+error.message)
     return resp.status(400).json({message:"Internal server error"})
    }
}