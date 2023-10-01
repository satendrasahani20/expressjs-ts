import {Request,Response} from "express";
import UserModel from "../../models/users";
export const getUser=(req:Request,res:Response)=>{
    res.json({
        msg:"I am from Controller"
    });
}
export const createUser=async(req:Request,res:Response)=>{
    try {
        // Access request data and create a new user
        const newUser = await UserModel.create(req.body);
    
        // Send a success response with user data
        return res.status(201).json({
          msg: "User created successfully",
          data: newUser,
        });
      } catch (error:any) {
        // Handle any errors that occur during user creation
        console.error("Error creating user:", error);
        return res.status(500).json({
          msg: "Error creating user",
          error: error.message,
        });
      }
}