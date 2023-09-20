import express from "express";
import {createUser} from "./user.controller.js";

const router = express.Router();

router.post("/signup", createUser);

export const UserRoutes = router;
