import React from "react";
// import profile from "../assets/user-profile.webp";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <>
      <div className="w-[100%]">
        <div>
          <div className="flex justify-evenly border-b border-gray-200">
            <div className="cursor-pointer hover:bg-gray-200 w-full p-3 text-center">
              <h1 className="font-semibold text-gray-600 text-xl">For you</h1>
            </div>
            <div className="cursor-pinter hover:bg-gray-200 w-full p-3 text-center">
              <h1 className="font-semibold text-gray-600 text-xl">Following</h1>
            </div>
          </div>

          <div className="flex items-center">
            <div className="p-4">
              <Avatar
                src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
                size="40"
                className="cursor-pointer"
                round={true}
              />
            </div>

            <input
              type="text"
              className="border border-gray-100 w-[85%] rounded-full p-2 text-xl"
              placeholder="What is happening?"
            />
          </div>

          <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <div className="cursor-pointer">
              <CiImageOn size={"30px"} />
            </div>

            <button className="bg-[#1098F0]  hover:bg-sky-600 text-lg text-white rounded-full px-4 py-1 cursor-pointer">
              Post
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default CreatePost;
