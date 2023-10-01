import express from "express";
import {createUser, getUser} from "../controller/users/users"
export const UserRouter:express.IRouter=express.Router();
UserRouter
.route("/")
.get(getUser)

UserRouter
.route("/")
.post(createUser)
