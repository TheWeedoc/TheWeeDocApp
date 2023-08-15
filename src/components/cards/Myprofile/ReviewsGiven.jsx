import React from "react";
import { Card } from "antd";
import { rightArrow } from "../../../Assests/Svg/Commonsvg";

function ReviewsGiven({ item }) {
  return (
    <div className="flex justify-center w-full">
      <Card
        className="w-full  bg-[#0a0a0d] text-white !p-0"
        bordered={false}
        bodyStyle={{ padding: "0" }}
      >
        <div className="flex flex-row space-x-3">
          <div className="w-1/2">
            <img alt="example" src={item.img} className="" />
          </div>
          <div className="flex flex-col w-1/2 justify-between py-4">
            <div className="">
              <div className="font-notosans text-lg font-semibold w-36 md:w-48 lg:w-52  truncate">
                {item.title}
              </div>
              <div className="font-notosans text-gray-400 text-lg font-semibold w-36 md:w-48 lg:w-52 ">
                description
              </div>
            </div>
            <div className="flex flex-row justify-between ">
              <div>2 days ago</div>
              <div>{rightArrow}</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ReviewsGiven;
