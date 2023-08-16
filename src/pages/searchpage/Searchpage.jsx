import React from "react";
import "./Searchpage.css";
import { Input } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { closeicons, searchicon } from "../../Assests/Svg/Commonsvg";
import OptionButton from "../../components/Search/OptionButton";
import ToggleSwitch from "../../components/Search/ToggleButton";
import Homepagecard from "../../components/cards/Hompage/Homepagecard";
function Searchpage() {
  const navigate = useNavigate();
  const Genrelist = ["Action", "Drama", "Thirller", "Comedy", "Romance"];

  const cardarr = [
    {
      id: "1",
      image:
        "https://res.cloudinary.com/dwku5ukpm/image/upload/v1689315175/weedoc/videos/Speak_Out%21/image/osrqoqcx0ujdrj6wlos3.jpg",
      title: "Pen",
      likes: ["3.01K"],
      dislikes: ["3.01K"],
      age: "13",
      genere: [
        {
          id: 1,
          name: "Action",
        },
        {
          id: 2,
          name: "Adventure",
        },
      ],
    },
    {
      id: "2",

      image:
        "https://res.cloudinary.com/dwku5ukpm/image/upload/v1689315175/weedoc/videos/Speak_Out%21/image/osrqoqcx0ujdrj6wlos3.jpg",
      title: "Iragu",
      likes: ["3.01K"],
      dislikes: ["3.01K"],
      age: "13",
      genere: [
        {
          id: 1,
          name: "Action",
        },
        {
          id: 2,
          name: "Adventure",
        },
      ],
    },
    {
      id: "3",
      image:
        "https://res.cloudinary.com/dwku5ukpm/image/upload/v1689315175/weedoc/videos/Speak_Out%21/image/osrqoqcx0ujdrj6wlos3.jpg",
      title: "Pen",
      likes: ["3.01K"],
      dislikes: ["3.01K"],
      age: "13",
      genere: [
        {
          id: 1,
          name: "Action",
        },
        {
          id: 2,
          name: "Adventure",
        },
      ],
    },
    {
      id: "4",

      image:
        "https://res.cloudinary.com/dwku5ukpm/image/upload/v1689315175/weedoc/videos/Speak_Out%21/image/osrqoqcx0ujdrj6wlos3.jpg",
      title: "Iragu",
      likes: ["3.01K"],
      dislikes: ["3.01K"],
      age: "13",
      genere: [
        {
          id: 1,
          name: "Action",
        },
        {
          id: 2,
          name: "Adventure",
        },
      ],
    },
  ];

  return (
    <div className="w-full p-4 md:p-10 lg:p-20">
      <div className="flex flex-row justify-between font-notosans items-center text-white">
        <h2>What are you seeking for?</h2>
        <div
          onClick={() => navigate(-1)}
          className="flex float-right items-center cursor-pointer "
        >
          <div
            style={{
              display: "inline-block",
              borderRadius: "50%",
              backgroundColor: "#1e1f21",
              padding: "6px",
            }}
          >
            {closeicons}
          </div>
          <div className="pl-2">Close</div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row w-full bg-headerBackground text-white space-y-3 md:space-y-0 py-3">
          <div className="flex justify-center md:w-2/6 md:items-center md:justify-center md:flex">
            <ToggleSwitch />
          </div>

          <div className="md:flex md:w-4/6 md:items-center">
            <Input
              size="large"
              placeholder="Search short films, uploader’s name, etc...  "
              prefix={searchicon}
              className="w-full"
            />
          </div>

          {/* <div className="md:w-2/6 md:items-center md:justify-center md:flex">
            <select className="flex border w-full md:w-40 bg-headerBackground font-nanosans border-[#4A4949] rounded-md py-2">
              {Genrelist?.map((item, id) => {
                return <option key={id}>{item}</option>;
              })}
            </select>{" "}
          </div> */}
        </div>
        <div className="flex justify-start items-center py-6">
          <OptionButton options={Genrelist} />
        </div>

        <div className="">
          <h1 className="font-bold text-lg text-white py-6">
            02 Results found for "Comedy"
          </h1>

          <div className="flex justify-center py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 custom-lg:grid-cols-3 gap-4 custom-lg:gap-x-4 lg:gap-y-8 grid-rows-auto">
              {cardarr?.map((item, i) => (
                <Homepagecard item={item} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchpage;
