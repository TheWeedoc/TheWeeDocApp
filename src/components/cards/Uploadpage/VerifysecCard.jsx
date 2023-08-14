import React from "react";
import { Link } from "react-router-dom";
import "./uploadsection.css";
function Verifyseccard({ item }) {
  return (
    <div className="verifycardDiv w-full md:w-[380px]">
      <Link to={`/video/${1}/${item.title}`}>
        <img
          className="verifycardimg w-full md:w-[380px]"
          src={item?.img}
          alt={item.title}
        />
      </Link>
      <div className=" d-flex align-items-center justify-content-between my-2">
        <div>
          <span className="verifycrdTitle">{item.title}</span>
        </div>
        <div className="thumbsDiv">
          <div>2 days</div>
        </div>
      </div>
      <span className="crdbtmsec-text">Action | Tamil | U/A 14+</span>
    </div>
  );
}

export default Verifyseccard;
