import React from "react";
import { Link } from "react-router-dom";
import "./uploadsection.css";
function Verifyseccard({ item, lastUpdate }) {
  const genresString = item?.genere?.map((genre) => genre.name).join(" | ");
  const ageString = item?.age?.replace(/\D/g, "");
  const resultString = `${genresString} | ${item?.language} | ${ageString}+`;

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
      timeAgo = `${minutesAgo} ${minutesAgo === 1 ? "minute" : "minutes"}`;
    } else if (timeDifference < day) {
      const hoursAgo = Math.floor(timeDifference / hour);
      timeAgo = `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"}`;
    } else if (timeDifference < week) {
      const daysAgo = Math.floor(timeDifference / day);
      timeAgo = `${daysAgo} ${daysAgo === 1 ? "day" : "days"}`;
    } else if (timeDifference < month) {
      const weeksAgo = Math.floor(timeDifference / week);
      timeAgo = `${weeksAgo} ${weeksAgo === 1 ? "week" : "weeks"}`;
    } else if (timeDifference < year) {
      const monthsAgo = Math.floor(timeDifference / month);
      timeAgo = `${monthsAgo} ${monthsAgo === 1 ? "month" : "months"}`;
    } else {
      const yearsAgo = Math.floor(timeDifference / year);
      timeAgo = `${yearsAgo} ${yearsAgo === 1 ? "year" : "years"}`;
    }
  }
  return (
    <div className="verifycardDiv w-full">
      <img className="verifycardimg" src={item?.image} alt={item?.title} />

      <div className=" d-flex align-items-center justify-content-between my-2 container">
        <div className="">
          <span className="verifycrdTitle ellipsis">{item?.title}</span>
        </div>

        <div className="text-sm">{timeAgo}</div>
      </div>
      <span className="crdbtmsec-text capitalize">{resultString}</span>
    </div>
  );
}

export default Verifyseccard;
