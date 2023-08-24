import React, { useState } from "react";
import { Card } from "antd";
import { rightArrow } from "../../../Assests/Svg/Commonsvg";
import { useNavigate } from "react-router";

function ReviewsGiven({ item, lastUpdate }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/video/${item.id}`);
  };

  let timeAgo = "";

  if (lastUpdate) {
    const updatedDate = new Date(lastUpdate);

    const now = new Date();
    const timeDifference = now - updatedDate;

    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;

    if (timeDifference < minute) {
      timeAgo = "Just now";
    } else if (timeDifference < hour) {
      const minutesAgo = Math.floor(timeDifference / minute);
      timeAgo = `${minutesAgo} ${minutesAgo === 1 ? "minute" : "minutes"} ago`;
    } else if (timeDifference < day) {
      const hoursAgo = Math.floor(timeDifference / hour);
      timeAgo = `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
    } else if (timeDifference < week) {
      const daysAgo = Math.floor(timeDifference / day);
      timeAgo = `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
    } else if (timeDifference < month) {
      const weeksAgo = Math.floor(timeDifference / week);
      timeAgo = `${weeksAgo} ${weeksAgo === 1 ? "week" : "weeks"} ago`;
    } else if (timeDifference < year) {
      const monthsAgo = Math.floor(timeDifference / month);
      timeAgo = `${monthsAgo} ${monthsAgo === 1 ? "month" : "months"} ago`;
    } else {
      const yearsAgo = Math.floor(timeDifference / year);
      timeAgo = `${yearsAgo} ${yearsAgo === 1 ? "year" : "years"} ago`;
    }
  }

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
              <div className="font-notosans text-gray-400 text-lg font-semibold w-36 md:w-48 lg:w-52 ">
                {item?.description}
              </div>
            </div>
            <div className="flex flex-row justify-between ">
              <div>{timeAgo}</div>
              <div>{rightArrow}</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ReviewsGiven;
