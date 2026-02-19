import { addUser } from "../controllers/Users/addUser.js";
import express from "express";

const router = express.Router()

router.post('/add/user', addUser)

export default router