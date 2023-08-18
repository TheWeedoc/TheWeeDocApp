import React, { useState } from "react";
import Header from "../../components/Layout/Header/Header";
import Uploads from "../../components/cards/Myprofile/Uploads";
import OthersProfileUploads from "../../components/cards/OtherProfile/OtherProfileUploads";
import { useParams } from "react-router";

function OthersProfile() {
  const [selectTab, setSelectTab] = useState("uploads");
  const { id } = useParams();

  const switchTab = (tabName) => {
    setSelectTab(tabName);
  };

  const cardarr = [
    {
      img: "https://i.ytimg.com/vi/YwDZMgIImSg/maxresdefault.jpg",
      title: "Pen",
      reviews: "3.01K",
    },
    {
      img: "https://i.ytimg.com/vi/OG0gxFIOqGI/maxresdefault.jpg",
      title: "Iragu",
      reviews: "1.42K",
    },
    {
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/short-story-thumbnail-design-template-c8d3daba0e4410fb1f3d7876bb2796b3_screen.jpg?ts=1589979453",
      title: "Animate ShortFilm",
      reviews: "3.01K",
    },
    {
      img: "https://i.ytimg.com/vi/gZp2x5k_9YI/maxresdefault.jpg",
      title: "Singsot",
      reviews: "34.01K",
    },
    {
      img: "https://filmfreeway-production-storage-01-storage.filmfreeway.com/projects/project_stills/002/027/318/original/AALY-Thumbnail-Oct-2020.jpg?1602488049",
      title: "AALY",
      reviews: "2.91K",
    },
    {
      img: "https://www.macworld.com/wp-content/uploads/2023/02/fursat-thumbnail-1.jpg?quality=50&strip=all",
      title: "Pencil",
      reviews: "3.01K",
    },
    {
      img: "https://i.ytimg.com/vi/YwDZMgIImSg/maxresdefault.jpg",
      title: "Pen",
      reviews: "3.01K",
    },
    {
      img: "https://blog.shortfundly.com/wp-content/uploads/2020/07/kannalane-tamil-shortfilm-review-by-shortfundly-1.jpg",
      title: "Kannalana",
      reviews: "3.01K",
    },
    {
      img: "https://blog.shortfundly.com/wp-content/uploads/2021/02/Marakkavea-Ninaikiren-_-Tamil-Short-Film-Review-Rating-2.5_5-800x520.png",
      title: "Marakkavea Ninaikkiren",
      reviews: "3.01K",
    },
    {
      img: "https://i.ytimg.com/vi/gZp2x5k_9YI/maxresdefault.jpg",
      title: "Singsot",
      reviews: "34.01K",
    },
    {
      img: "https://filmfreeway-production-storage-01-storage.filmfreeway.com/projects/project_stills/002/027/318/original/AALY-Thumbnail-Oct-2020.jpg?1602488049",
      title: "AALY",
      reviews: "2.91K",
    },
    {
      img: "https://www.macworld.com/wp-content/uploads/2023/02/fursat-thumbnail-1.jpg?quality=50&strip=all",
      title: "Pencil",
      reviews: "3.01K",
    },
    {
      img: "https://i.ytimg.com/vi/YwDZMgIImSg/maxresdefault.jpg",
      title: "Pen",
      reviews: "3.01K",
    },
    {
      img: "https://i.ytimg.com/vi/OG0gxFIOqGI/maxresdefault.jpg",
      title: "Iragu",
      reviews: "1.42K",
    },
    {
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/short-story-thumbnail-design-template-c8d3daba0e4410fb1f3d7876bb2796b3_screen.jpg?ts=1589979453",
      title: "Animate ShortFilm",
      reviews: "3.01K",
    },
    {
      img: "https://i.ytimg.com/vi/gZp2x5k_9YI/maxresdefault.jpg",
      title: "Singsot",
      reviews: "34.01K",
    },
  ];
  return (
    <>
      <Header />
      <div className="p-4 w-full text-[#FAFBFF]">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col md:flex-row justify-between bg-[#14161c] rounded-md border border-[#4A4949] w-full p-2  md:px-3 md:py-6 md:w-10/12">
            <div className="flex justify-center w-full lg:justify-start">
              <div className="flex flex-row items-center  space-x-8 md:max-w-40 ">
                <div className="w-24">
                  <img
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI="
                    alt="profile"
                    className="w-[80px] h-[80px] md:w-24 md:h-24 rounded-full border border-white border-4"
                  />
                </div>
                <div className="p-0 ">
                  <h1 className="profile_name">Nirmal kumar</h1>
                  <span className="text-gray-400 mt-4">Director</span>
                </div>
                <div className="flex items-center">
                  <button className="bg-[#2d2f35] text-white py-1 px-4 rounded-md">
                    Follow
                  </button>
                </div>
              </div>
            </div>

            {/* Followers */}
            <div className="flex flex-row items-center justify-center space-x-6 py-2 md:w-1/3">
              <div className="flex flex-col space-y-2 justify-center items-center">
                <h1>200</h1>
                <h1>Followers</h1>
              </div>
              <div className="flex flex-col space-y-2 justify-center items-center">
                <h1>500</h1>
                <h1>Following</h1>
              </div>
            </div>
          </div>
          {/* upload bar */}
          <div className="flex flex-col py-6 w-full md:w-10/12">
            <div className="flex flex-row justify-start space-x-4">
              <h1
                className={`text-[#9f9fa0] text-xl font-semibold cursor-pointer ${
                  selectTab === "uploads" &&
                  "!text-white underline underline-offset-8 decoration-4 decoration-white "
                }`}
                onClick={() => switchTab("uploads")}
              >
                Uploads
              </h1>
            </div>
            {/* Uploads */}
            {selectTab === "uploads" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6 justify-center items-center">
                {cardarr.map((i, index) => (
                  <OthersProfileUploads item={i} key={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OthersProfile;
