import React from "react";

import { Card } from "antd";
import {
  bannerplayicon,
  thumbsdown,
  thumbsup,
} from "../../../Assests/Svg/Commonsvg";
import { useNavigate } from "react-router";

function SavedFilms({ item }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/video/${item.id}`);
  };

  return (
    <div className="jutify-center items-center">
      <Card
        hoverable
        onClick={handleClick}
        className="w-full bg-[#0a0a0d] text-white"
        cover={<img alt="poster" src={item?.image} />}
        bordered={false}
      >
        <div className="flex flex-col justify-between ">
          <div className=" flex flex-row justify-between items-center text-white ">
            <div>
              <div className="font-notosans text-lg font-semibold w-36 md:w-48 lg:w-52  truncate">
                {item?.title}
              </div>
            </div>
            <div>{bannerplayicon}</div>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <div className="flex flex-row items-center space-x-1 pr-2 border-r-2 border-[#b7b7b7]">
              {thumbsup} <span>{item?.like_count}</span>
            </div>
            <div className="flex flex-row items-center space-x-1 pr-1 ">
              {thumbsdown} <span>{item?.dislike_count}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SavedFilms;
