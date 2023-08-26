import React from "react";
import "./searchcard.css";
import { thumbsdown, thumbsup } from "../../../Assests/Svg/Commonsvg";
import { Link } from "react-router-dom";
function SearchCard({ item }) {
  const genresString = item?.genere?.map((genre) => genre.name).join(" | ");
  const ageString = item?.age?.replace(/\D/g, "");
  const resultString = `${genresString} | ${item?.language} | ${ageString}+`;
  return (
    <div className="homepagecardDiv w-full md:w-[360-px]" key={item.id}>
      <Link to={`/video/${1}/${item?.title}`}>
        <img className="homepagecardimg" src={item?.image} alt={item?.title} />
      </Link>
      <div className=" d-flex align-items-center justify-content-between my-2">
        <div>
          <span className="homepgecrdTitle">{item?.title}</span>
        </div>
        <div className="thumbsDiv">
          <div>
            {thumbsup} {item?.like_count}
          </div>
          <div>
            {thumbsdown} {item?.dislike_count}
          </div>
        </div>
      </div>
      <span className="crdbtmsec-text capitalize">{resultString}</span>
    </div>
  );
}

export default SearchCard;
