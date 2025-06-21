import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  try {
    const { name, username, password, email } = req.body;

    // basic authentication

    if (!name || !username || !password || !email) {
      return res.status(401).json({
        message: "All fields are required.",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "user already exist",
        success: false,
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 16);

    await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      message: "User created successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        message: "All fields are requied.",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    console.log("login user", user);

    if (!user) {
      return res.status(401).json({
        message: "User does not exist with this email",
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "incorrect email and password",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(
      tokenData,
      process.env.TOKEN_SECRET,

      {
        expiresIn: "1d",
      }
    );
    console.log("token", token);
    return res
      .status(201)
      .cookie("token", token, { expiresIn: "1d", httpOnly: true })
      .json({
        message: `welcome back ${user.name}`,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

export const Logout = (req, res) => {
  return res.cookie("token", "", { expiresIn: new Date(Date.now) }).json({
    message: "user logged out successfully.",
    success: true,
  });
};

export const bookmark = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;
    const user = await User.findById(loggedInUserId);
    if (user.bookmarks.includes(tweetId)) {
      // remove
      await User.findByIdAndUpdate(loggedInUserId, {
        $pull: { bookmarks: tweetId },
      });
      return res.status(200).json({
        message: "remove from bookmasrk",
      });
    } else {
      // add
      await User.findByIdAndUpdate(loggedInUserId, {
        $push: { bookmarks: tweetId },
      });
      return res.status(200).json({
        message: "added in bookmark",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOtherUser = async (req, res) => {
  try {
    const { id } = req.params;
    const otherUser = await User.find({ _id: { $ne: id } }).select("-password");
    if (!otherUser) {
      return res.status(401).json({
        message: "currently do not have any users.",
      });
    }
    return res.status(200).json({
      otherUser,
    });
  } catch (error) {
    console.log(error);
  }
};

export const follow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const userId = req.params.id;
    const loggedInUser = await User.findById(loggedInUserId);
    const user = await User.findById(userId);
    if (!user.followers.includes(loggedInUser)) {
      await user.updateOne({ $push: { followers: loggedInUserId } });
      await loggedInUser.updateOne({ $push: { following: userId } });
    } else {
      return res.status(400).json({
        message: `User already followed to ${user.name}`,
      });
    }

    return res.status(200).json({
      message: `${loggedInUser.name} just followed ${user.name}`,
    });
  } catch (error) {
    error;
  }
};

export const unfollow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const userId = req.params.id;
    const loggedInUser = await User.findById(loggedInUserId);
    const user = await User.findById(userId);

    if (loggedInUser.following.includes(userId)) {
      await loggedInUser.updateOne({ $pull: { following: userId } });
      await user.updateOne({ $pull: { followers: loggedInUserId } });
    } else {
      return res.ststus(400).json({
        message: `user has not followed yet`,
      });
    }
    return res.status(200).json({
      message: `${loggedInUser.name} unfollow to ${user.name}`,
    });
  } catch (error) {
    error;
  }
};
