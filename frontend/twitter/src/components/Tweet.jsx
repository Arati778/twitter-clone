import React from "react";
import Avatar from "react-avatar";
import { GoComment } from "react-icons/go";
import { CiHeart, CiBookmark } from "react-icons/ci";

const Tweet = () => {
  return (
    <div>
      <div className="flex p-4 border-b border-gray-200">
        <div className="">
          <Avatar
            src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            size="40"
            className="cursor-pointer"
            round={true}
          />
        </div>
        <div className="ml-2 w-full">
          <div className="flex items-center cursor-pointer">
            <h1 className="font-bold">Amrita Singh</h1>
            <p className="text-gray-700 text-sm ml-2">@amritasingh12 - 1m</p>
          </div>
          <div className="my-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              iusto incidunt maiores amet beatae explicabo excepturi assumenda
              suscipit neque impedit totam veritatis in corrupti optio voluptate
              non harum ea aliquid!
            </p>
          </div>

          <div className="flex justify-between my-4">
            <div className="flex items-center">
              <div className="cursor-pointer p-2 hover:bg-green-200 rounded-full">
                <GoComment size="26px" />
              </div>

              <p>100</p>
            </div>
            <div className="flex items-center">
              <div className="cursor-pointer p-2 hover:bg-pink-200 rounded-full">
                <CiHeart size="33px" />
              </div>

              <p>98</p>
            </div>
            <div className="flex items-center">
              <div className="cursor-pointer p-2 hover:bg-yellow-200 rounded-full">
                <CiBookmark size="29px" />
              </div>

              <p>23</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
