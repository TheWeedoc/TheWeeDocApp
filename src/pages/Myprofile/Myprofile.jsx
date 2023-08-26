import React, { useEffect, useState } from "react";
import "./Myprofile.css";
import { EditprofileIcon } from "../../Assests/Svg/Commonsvg";
import Uploads from "../../components/cards/Myprofile/Uploads";
import SavedFilms from "../../components/cards/Myprofile/SavedFilms";
import { Input } from "antd";

import ReviewsGiven from "../../components/cards/Myprofile/ReviewsGiven";
import Header from "../../components/Layout/Header/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllReviews,
  getAllSavedFilms,
  getUser,
} from "../../store/Home/userReducer";
import defaultProfile from "../../Assests/Images/Defaultprofile.png";
function Myprofile() {
  const [selectTab, setSelectTab] = useState("uploads");

  const { user, reviewsGiven, savedFilms } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const switchTab = (tabName) => {
    setSelectTab(tabName);
  };

  useEffect(() => {
    if (user === "") dispatch(getUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (reviewsGiven.length === 0) dispatch(getAllReviews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (savedFilms.length === 0) dispatch(getAllSavedFilms());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          <div className="flex flex-col md:flex-row justify-between bg-[#14161c] container ellipsis rounded-md border border-[#4A4949] w-full p-1  md:px-3 md:py-6 md:w-10/12">
            <div className="flex justify-center w-full lg:justify-start">
              <div className="flex flex-row items-center  space-x-8 md:max-w-40">
                <div className="w-24 ">
                  <img
                    src={user?.profile_pic ? user?.profile_pic : defaultProfile}
                    alt="profile"
                    className="w-24 h-24 rounded-full border border-white border-4"
                  />
                </div>
                <div className="p-0 container w-32 md:w-52 lg:w-64">
                  <p className="font-bold md:text-md lg:text-lg font-notosans ellipsis">
                    {user?.first_name} {user?.last_name}
                  </p>
                  <span className="text-gray-400 mt-4">Director</span>
                </div>
                <Link to="/edit_profile">
                  <div>{EditprofileIcon}</div>
                </Link>
              </div>
            </div>

            {/* Followers */}
            <div className="flex flex-row items-center justify-center space-x-6 py-2 md:w-1/3">
              <div className="flex flex-col space-y-2 justify-center items-center">
                <h1>{user?.followers_count}</h1>
                <h1>Followers</h1>
              </div>
              <div className="flex flex-col space-y-2 justify-center items-center">
                <h1>{user?.following_count}</h1>
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
              <h1
                className={`text-[#9f9fa0] cursor-pointer text-xl font-semibold ${
                  selectTab === "savedfilms" &&
                  "!text-white underline underline-offset-8 decoration-4 decoration-white"
                }`}
                onClick={() => switchTab("savedfilms")}
              >
                Saved Films
              </h1>
              <h1
                className={`text-[#9f9fa0] text-xl font-semibold cursor-pointer ${
                  selectTab === "reviews" &&
                  "!text-white underline underline-offset-8 decoration-4 decoration-white"
                }`}
                onClick={() => switchTab("reviews")}
              >
                Reviews Given
              </h1>
            </div>
            {/* Uploads */}
            {selectTab === "uploads" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6 justify-center items-center">
                {cardarr.map((i, index) => (
                  <Uploads item={i} key={index} />
                ))}
              </div>
            )}

            {/* Saved Films */}
            {selectTab === "savedfilms" &&
              (!(savedFilms.length > 0) ? (
                <div className="py-6">
                  <h1 className="text-white text-center">No films saved</h1>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6 justify-center items-center">
                  {savedFilms.map((i, index) => (
                    <SavedFilms item={i.movie} key={i.id} />
                  ))}
                </div>
              ))}

            {/* Reviews Given */}
            {selectTab === "reviews" && (
              <div className="flex flex-col py-6">
                <div className="flex flex-col md:flex-row md:justify-between space-y-2 md:space-y-0">
                  <div className="md:w-2/3">
                    <Input
                      placeholder="Search for films review"
                      className="bg-black text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex justify-center md:w-1/3">
                    <div className="uplod_genre_div">
                      <select
                        placeholder=""
                        defaultValue="newtoold"
                        className="h-9"
                      >
                        <option value="newtoold">Newest to Oldest</option>;
                        <option value="oldtonew">Oldest to Newest</option>;
                      </select>
                    </div>
                  </div>
                </div>

                {reviewsGiven.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 py-6 justify-center items-center">
                    {reviewsGiven.map((i, index) => (
                      <ReviewsGiven
                        item={i.movie}
                        key={i.id}
                        lastUpdate={i.updated_at}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="py-6">
                    <h1 className="text-white text-center">
                      No Reviews Given yet
                    </h1>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Myprofile;
