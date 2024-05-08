import React from "react";
import "./homepagecard.css";
import { thumbsdown, thumbsup } from "../../../Assests/Svg/Commonsvg";
import { Link } from "react-router-dom";
function Homepagecard({ item }) {
  const genresString = item?.genere?.map((genre) => genre.name).join(" | ");
  const ageString = item?.age?.replace(/\D/g, "");
  const resultString = `${genresString} | ${item?.language} | ${ageString}+`;
  return (
    <div className="homepagecardDiv w-full md:w-[360-px] " key={item.id}>
      {/* <Link to={`/video/${1}/${item?.title}`}> */}
      <div className="video-img-div">
        <Link to={`/video/${item.id}`}>
          <img
            className="homepagecardimg"
            src={item?.image}
            alt={item?.title}
          />
        </Link>
      </div>
      <div>
        <div className=" d-flex align-items-center justify-content-between my-2">
          <div>
            <span className="homepgecrdTitle">{item?.title}</span>
          </div>
          <div className="thumbsDiv">
            <div>
              {thumbsup} {item?.likes[0] ? item?.likes[0] : 0}
            </div>
            <div>
              {thumbsdown} {item?.dislikes[0] ? item?.dislikes[0] : 0}
            </div>
          </div>
        </div>
        <span className="crdbtmsec-text capitalize">{resultString}</span>
      </div>
    </div>
  );
}

export default Homepagecard;
