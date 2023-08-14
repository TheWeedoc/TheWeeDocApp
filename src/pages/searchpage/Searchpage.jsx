import React from "react";
import "./Searchpage.css";
import { Input } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { closeicons, searchicon } from "../../Assests/Svg/Commonsvg";
function Searchpage() {
  const navigate = useNavigate();
  const Genrelist = ["Action", "Drama", "Thirller", "Romance", "Comedy"];

  return (
    <div className="searchmain">
      <div className="flex flex-row justify-between font-notosans items-center text-white">
        <h2>What are you seeking for?</h2>
        <div onClick={() => navigate(-1)} className="float-right">
          {closeicons}
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full bg-headerBackground text-white space-y-3 md:space-y-0 py-3">
        <div className="md:flex md:w-4/6 md:items-center">
          <Input
            size="large"
            placeholder="Search short films, uploader’s name, etc...  "
            prefix={searchicon}
            className="w-full"
          />
        </div>
        <div className="md:w-2/6 md:items-center md:justify-center md:flex">
          <select className="flex border w-full md:w-40 bg-headerBackground font-nanosans border-[#4A4949] rounded-md py-2">
            {Genrelist?.map((item, id) => {
              return <option key={id}>{item}</option>;
            })}
          </select>{" "}
        </div>
      </div>
    </div>
  );
}

export default Searchpage;
