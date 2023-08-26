import React from "react";
import { Card } from "antd";
import { rightArrow } from "../../../Assests/Svg/Commonsvg";
import { useNavigate } from "react-router";

function SearchReviewsGiven({ item }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/video/${item.id}`);
  };

  return (
    <div className="flex justify-center w-full">
      <Card
        onClick={handleClick}
        className="w-full bg-[#0a0a0d] text-white !p-0 cursor-pointer"
        bordered={false}
        bodyStyle={{ padding: "0" }}
      >
        <div className="flex flex-row space-x-3">
          <div className="w-1/2">
            <img alt="example" src={item?.image} className="" />
          </div>
          <div className="flex flex-col w-1/2 justify-between py-4">
            <div className="">
              <div className="font-notosans text-lg font-semibold w-36 md:w-48 lg:w-52  truncate">
                {item?.title}
              </div>
            </div>
            <div className="flex flex-row justify-between ">
              <div>{rightArrow}</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SearchReviewsGiven;
