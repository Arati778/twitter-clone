import React from "react";

import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";

const RightSideBar = () => {
  return (
    <div className="w-[25%] my-2">
      <div className="flex hover:border hover:border-gray-400 items-center bg-gray-100 p-2 rounded-full">
        <CiSearch size={"25px"} />
        <input
          type="text"
          placeholder="Search.."
          className="outline-none px-2"
        />
      </div>

      <div className="p-4 my-4 border border-gray-200 bg-gray-100 rounded-2xl ">
        <h1 className="font-bold text-2xl ">Who to follow</h1>

        <div className="flex justify-between my-3">
          <div className="flex ">
            <div>
              <Avatar
                src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
                size="40"
                className="cursor-pointer"
                round={true}
              />
            </div>
            <div className="ml-2 cursor-pointer">
              <h1 className="font-bold text-lg">Amrita Singh</h1>
              <p className="text-sm">@amritasing123</p>
            </div>
          </div>
          <div className=" bg-black text-white rounded-full cursor-pointer">
            <button className="px-5 p-3 cursor-pointer">Follow</button>
          </div>
        </div>
        <div className="flex justify-between my-3">
          <div className="flex ">
            <div>
              <Avatar
                src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
                size="40"
                className="cursor-pointer"
                round={true}
              />
            </div>
            <div className="ml-2">
              <h1 className="font-bold text-lg">Amrita Singh</h1>
              <p className="text-sm">@amritasing123</p>
            </div>
          </div>
          <div className=" bg-black text-white rounded-full cursor-pointer">
            <button className="px-5 p-3 cursor-pointer">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
