import React from "react";
import { Link } from "react-router-dom";
import "./uploadsection.css";

function ApprovedCard({ item }) {
  const genresString = item?.genere?.map((genre) => genre.name).join(" | ");
  const ageString = item?.age?.replace(/\D/g, "");
  const resultString = `${genresString} | ${item?.language} | ${ageString}+`;
  return (
    <div className="verifycardDiv  ">
      <Link to={`/video/${item?.id}`}>
        <img className="verifycardimg" src={item?.image} alt={item?.title} />
      </Link>
      <div className=" d-flex align-items-center justify-content-between my-2">
        <div>
          <span className="verifycrdTitle">{item?.title}</span>
        </div>
      </div>
      <span className="crdbtmsec-text">{resultString}</span>
    </div>
  );
}

export default ApprovedCard;
