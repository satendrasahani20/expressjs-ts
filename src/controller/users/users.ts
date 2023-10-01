import {Request,Response} from "express"
export const users=(req:Request,res:Response)=>{
    res.json({
        msg:"I am from Controller"
    });
}
