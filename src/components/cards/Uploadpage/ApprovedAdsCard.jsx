import React from "react";
import { Link } from "react-router-dom";
import "./uploadsection.css";

function ApprovedAdsCard({ item }) {
  return (
    <div className="verifycardDiv w-full md:w-[380px] ">
      <Link to={`/video/${1}/${item.title}`}>
        <img
          className="verifycardimg w-full md:max-w-[380px]"
          src={item?.img}
          alt={item.title}
        />
      </Link>
      <div className=" d-flex align-items-center justify-content-between my-2">
        <div>
          <span className="verifycrdTitle">{item.title}</span>
        </div>
        <div className="thumbsDiv">
          {/* <button className="Appro_uploadbtn">Procced to pay</button> */}
          <button className="bg-white px-4 py-1 rounded-lg text-black   ">
            Procced to pay
          </button>
        </div>
      </div>
      <span className="crdbtmsec-text">2 days</span>
    </div>
  );
}

export default ApprovedAdsCard;
