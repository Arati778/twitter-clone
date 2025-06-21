import express from "express";
import {
  createTweet,
  deleteTweet,
  likeOrDislike,
} from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.post("/create", isAuthenticated, createTweet);
router.delete("/delete/:id", deleteTweet);
router.put("/like/:id", isAuthenticated, likeOrDislike);

export default router;
