import React from "react";
import { Card } from "antd";
import {
  commentIcon,
  sharebtn,
  thumbsdown,
  thumbsup,
} from "../../../Assests/Svg/Commonsvg";

function Uploads({ item }) {
  return (
    <div className="jutify-center items-center" key={item.id}>
      <Card
        hoverable
        className="w-full bg-[#0a0a0d] text-white"
        cover={<img alt="poster" src={item.img} />}
        bordered={false}
      >
        <div className="flex flex-col justify-between ">
          <div className=" flex flex-row justify-between items-center text-white ">
            <div>
              <div className="font-notosans text-lg font-semibold w-36 md:w-48 lg:w-52  truncate">
                Heloooooooooooooooooooooooooooooooooopooooooooo
              </div>
            </div>
            <div>
              <h1 className="flex flex-row space-x-1 items-center">
                {commentIcon} <span>20 Reviews</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <div className="flex flex-row items-center space-x-1 pr-1 border-r-2 border-white">
              {thumbsup} <span>20</span>
            </div>
            <div className="flex flex-row items-center space-x-1 pr-1 border-r-2 border-white">
              {thumbsdown} <span>20</span>
            </div>
            <div className="flex flex-row items-center space-x-1">
              {sharebtn} <span>20</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Uploads;
