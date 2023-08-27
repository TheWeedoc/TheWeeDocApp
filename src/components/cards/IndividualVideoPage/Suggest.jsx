import React from "react";
import { sharebtn } from "../../../Assests/Svg/Commonsvg";
import { Input } from "antd";
import "./Suggest.css";

const Suggest = () => {
  const suggestion = [
    {
      id: 1,
      username: "deekhari00716",
      first_name: "Voice",
      last_name: "value",
      designation: "Director",
      profile_pic:
        "https://res.cloudinary.com/dwku5ukpm/image/upload/v1692792131/weedoc/profilepic/Voice2/pex2ir7ruup6hm2afdn9.png",
    },
    {
      id: 2,
      username: "deekhari00716",
      first_name: "Voice",
      last_name: "value",
      designation: "Director",
      profile_pic:
        "https://res.cloudinary.com/dwku5ukpm/image/upload/v1692792131/weedoc/profilepic/Voice2/pex2ir7ruup6hm2afdn9.png",
    },
    {
      id: 3,
      username: "deekhari00716",
      first_name: "Voice",
      last_name: "value",
      designation: "Director",
      profile_pic:
        "https://res.cloudinary.com/dwku5ukpm/image/upload/v1692792131/weedoc/profilepic/Voice2/pex2ir7ruup6hm2afdn9.png",
    },
  ];

  return (
    <div className="absolute top-0 right-0 bg-[#0F1015] py-2 px-2 w-80 z-50 rounded-md font-notosans">
      <div className="p-4">
        <Input
          placeholder="Search"
          className="text-white bg-transparent border-1 border-solid border-[#4A4949] "
        />
      </div>
      <div className="py-1 w-full space-y-4 h-96 overflow-y-scroll divide-gray-700 p-4">
        {suggestion.length > 0 &&
          suggestion.map((i) => (
            <div className="flex flex-row justify-between" key={i.id}>
              <div className="flex flex-row items-center">
                <img
                  src={i?.profile_pic}
                  alt="Profile_pic"
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex items-center container pl-2">
                  <h1 className=" ellipsis reviewer-name text-white">
                    {i?.first_name} {i?.last_name}
                  </h1>
                </div>
              </div>
              <div className="flex items-center">{sharebtn}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Suggest;
