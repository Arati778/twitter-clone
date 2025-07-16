import React, { useEffect } from "react";
import LeftSideBar from "./LeftSideBar";
import Feed from "./Feed";
import RightSideBar from "./RightSideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import useProfileData from "../hooks/useProfileData";

const Home = () => {
  const { user } = useSelector((store) => store.user);

  // useProfileData(user._id);
  useEffect(() => {
    if (user?._id) {
      useProfileData(user._id);
    }
  }, [user]);
  return (
    <div className="flex justify-between w-[80%] m-auto">
      <LeftSideBar />

      <Outlet />
      <RightSideBar />
    </div>
  );
};

export default Home;
