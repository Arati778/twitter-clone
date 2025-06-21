import { Tweet } from "../models/tweetSchema.js";

export const createTweet = async (req, res) => {
  try {
    const { title, description, id } = req.body;

    if (!title || !description || !id) {
      return res.status(401).json({
        message: "all fields are required",
        success: false,
      });
    }
    await Tweet.create({
      title,
      description,
      userId: id,
    });
    return res.status(201).json({
      message: "Tweet created Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;
    await Tweet.findByIdAndDelete(id);
    return res.status(201).json({
      message: "Tweet deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const likeOrDislike = async (req, res) => {
  const tweetId = req.params.id;
  const loggedInUserId = req.body.id;
  const tweet = await Tweet.findById(tweetId);
  if (tweet.like.includes(loggedInUserId)) {
    // diaslike
    await Tweet.findByIdAndUpdate(tweetId, { $pull: { like: loggedInUserId } });
    return res.status(200).json({
      message: "you dislike this post",
    });
  } else {
    // like
    await Tweet.findByIdAndUpdate(tweetId, { $push: { like: loggedInUserId } });
    return res.status(200).json({
      message: "you like this post",
    });
  }
};
