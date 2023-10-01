import express from "express";
import {users} from "../controller/users/users"
export const UserRouter:express.IRouter=express.Router();
UserRouter
.route("/")
.get(users)
