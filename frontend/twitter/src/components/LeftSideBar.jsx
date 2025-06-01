import React from "react";
import logo from "../assets/twitter-logo.png";
import { CiSearch, CiUser, CiBookmark, CiHome } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <>
      <div className="w-[20%]">
        <div className="ml-2">
          <img src={logo} width={"41px"} alt="" />
        </div>

        <Link
          to="/"
          className="flex my-2 px-3 py-3 items-center hover:bg-gray-200 hover:cursor-pointer rounded-full"
        >
          <div>
            <CiHome size={"35px"} />
          </div>
          <div>
            <h1 className="font-bold text-xl ml-2">Home</h1>
          </div>
        </Link>

        <div className="flex my-2 px-3 py-2 items-center hover:bg-gray-200 hover:cursor-pointer rounded-full">
          <div>
            <CiSearch size={"35px"} />
          </div>
          <div>
            <h1 className="font-bold text-xl ml-2"> Explore</h1>
          </div>
        </div>

        <div className="flex my-2 px-3 py-2 items-center hover:bg-gray-200 hover:cursor-pointer rounded-full">
          <div>
            <IoIosNotificationsOutline size={"35px"} />
          </div>
          <div>
            <h1 className="font-bold text-xl ml-2">Notification</h1>
          </div>
        </div>

        <div className="flex my-2 px-3 py-2 items-center hover:bg-gray-200 hover:cursor-pointer rounded-full">
          <div>
            <PiEnvelopeSimpleThin size={"35px"} />
          </div>
          <div>
            <h1 className="font-bold text-xl ml-2">Messages</h1>
          </div>
        </div>

        <Link
          to="/profile"
          className="flex my-2 px-3 py-2 items-center hover:bg-gray-200 hover:cursor-pointer rounded-full"
        >
          <div>
            <CiUser size={"35px"} />
          </div>
          <div>
            <h1 className="font-bold text-xl ml-2">Profile</h1>
          </div>
        </Link>

        <div className="flex my-2 px-3 py-2 items-center hover:bg-gray-200 hover:cursor-pointer rounded-full">
          <div>
            <CiBookmark size={"35px"} />
          </div>
          <div>
            <h1 className="font-bold text-xl ml-2">Bookmarks</h1>
          </div>
        </div>

        <div className="flex my-2 px-3 py-2 items-center hover:bg-gray-200 hover:cursor-pointer rounded-full">
          <div>
            <AiOutlineLogout size={"35px"} />
          </div>
          <div>
            <h1 className="font-bold text-xl ml-2">Logout</h1>
          </div>
        </div>

        <button className="items-center text-lg font-bold bg-[#1098F0] text-white rounded-full w-full px-4 py-2 hover:bg-sky-600 hover:cursor-pointer  ">
          Post
        </button>
      </div>
    </>
  );
};

export default LeftSideBar;
