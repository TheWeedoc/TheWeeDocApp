import React from "react";
import { bannerplayicon, bannersave } from "../../Assests/Svg/Commonsvg";
import { useNavigate } from "react-router";
import defaultProfile from "../../Assests/Images/Defaultprofile.png";

const CarouselHomePage = ({ item }) => {
  const genresString = item?.genere?.map((genre) => genre.name).join(" | ");
  const ageString = item?.age?.replace(/\D/g, "");
  const resultString = `${genresString} | ${item?.language} | ${ageString}+`;
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/video/${item?.id}`);
  };

  return (
    <>
      <div className="BannerDiv md:hidden" onClick={handleClick}>
        <img src={item?.image} alt={item?.title} className="w-full h-auto" />

        <div className="mobileMask " />
        <div className="mobileMask1"></div>

        <div className="absolute inset-0 flex flex-col justify-end items-center text-white text-center p-8">
          <h2 className="text-3xl font-bold mb-2">{item?.title}</h2>
          <p className="text-lg">
            <span className="capitalize">{resultString}</span>
          </p>
        </div>
      </div>
      {/* Desktop */}
      <div className="BannerDiv hidden md:block" onClick={handleClick}>
        <img src={item?.image} alt={item?.title} width="100" height="100" />
        <div className="mask"></div>
        <div className="bannercontDiv">
          <div className="usernameDiv">
            <img src={defaultProfile} alt="user" className="w-full" />
            <h4>{item?.customer}</h4>
            <button>Follow</button>
          </div>
          <h1 className="titlename">{item?.title}</h1>
          {/* <div className="catagoryDiv">
              <div>Action</div>
              <div>Triller</div>
              <div>English</div>
              <div>U/A 13+</div>
            </div> */}
          <p className="text-lg text-white">
            <span className="capitalize">{resultString}</span>
          </p>
          <p className="description">{item?.description}</p>
          <div className="playbtnDiv">
            <button>{bannerplayicon} Play</button>
            <div>{bannersave}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselHomePage;
