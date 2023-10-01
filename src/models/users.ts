import { Schema,model,Document } from "mongoose";
interface User{
    name:string,
    dept:string
}

const userSchema=new Schema<User>({
    name:{
        type:String,
        unique:true,
        required:true
    },
    dept:{
        type:String,
        required:true
    }
})

const UserModel=model<User>("newUser",userSchema)
export default UserModel;