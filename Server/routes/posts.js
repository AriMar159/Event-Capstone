import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost); // Fixed typo: changed "posts" to "post"

export default router;

