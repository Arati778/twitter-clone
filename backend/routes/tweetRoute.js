import express from "express";
import {
  createTweet,
  deleteTweet,
  getAllTweet,
  getFollowingUserTweet,
  likeOrDislike,
} from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.post("/create", isAuthenticated, createTweet);
router.delete("/delete/:id", deleteTweet);
router.put("/like/:id", isAuthenticated, likeOrDislike);
router.get("/alltwwets/:id", isAuthenticated, getAllTweet);
router.get("/followingtweet/:id", isAuthenticated, getFollowingUserTweet);
export default router;
