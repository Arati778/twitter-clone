import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

const Profile = () => {
  return (
    <div className="w-[50%] border-l border-r border-gray-200 ">
      <div className="">
        <div className="flex items-center py-2">
          <Link
            to="/"
            className="rounded-full hover:bg-gray-200 p-2 hover:cursor-pointer"
          >
            <IoMdArrowBack size={"24px"} />
          </Link>
          <div className="ml-4">
            <h1 className="font-bold text-lg">Amrita Singh</h1>
            <p className="text-gray-500 text-sm"> 100 post</p>
          </div>
        </div>
        <img
          className="h-75 w-[100%]"
          src="https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg"
          alt=""
        />

        <div className="border-white border-4 top-70 ml-2 rounded-full absolute">
          <Avatar
            src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            size="150"
            className="cursor-pointer"
            round={true}
          />
        </div>
        <div className="text-right m-4">
          <button className="tracking-wide border border-blue-300 hover:bg-gray-200 px-6 py-2 rounded-full font-bold">
            Edit profile
          </button>
        </div>
        <div className="m-4">
          <h1 className="font-bold text-xl">Amrita Singh</h1>
          <p className="text-gray-600">@amritasing123</p>
        </div>
        <div className="m-4 tracking-wider">
          <p>
            Software Engineer 👨‍💻 Sharing insights on AI tools | Tech Tips | Open
            for collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
