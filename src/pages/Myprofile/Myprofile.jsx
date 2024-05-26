import React, { useEffect, useState } from "react";
import "./Myprofile.css";
import { EditprofileIcon, SwitchVeritcal } from "../../Assests/Svg/Commonsvg";
import { SearchOutlined,GlobalOutlined } from "@ant-design/icons";
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
  sortReviewsGiven,
} from "../../store/Home/userReducer";
import defaultProfile from "../../Assests/Images/Defaultprofile.png";
import { getMyProfileSearch } from "../../store/Home/Search/searchReducer";
import { uploadsApproved } from "../../store/Home/uploadsReducer";
import { Helmet } from "react-helmet";
function Myprofile() {
  const [selectTab, setSelectTab] = useState("uploads");
  const [filterEnabled, setFilterEnabled] = useState(false);

  const { user, reviewsGiven, savedFilms } = useSelector((state) => state.user);
  const { searchMyProfileResults } = useSelector((state) => state.search);
  const { approved } = useSelector((state) => state.uploads);
  const dispatch = useDispatch();

  const switchTab = (tabName) => {
    setSelectTab(tabName);
  };

  const handleSortReviews = (e) => {
    if (reviewsGiven.length > 0) dispatch(sortReviewsGiven());
  };

  const handleFilterReviews = (e) => {
    if (e.target.value === "") {
      setFilterEnabled(false);
    } else {
      setFilterEnabled(true);
      dispatch(getMyProfileSearch(e.target.value));
    }
  };

  useEffect(() => {
    dispatch(getUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(uploadsApproved());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getAllReviews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getAllSavedFilms());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    user !== "" && (
      <>
        <Helmet>
          <title>{user?.first_name}'s Profile - TheWeedoc</title>
        </Helmet>
        <Header />
        <div className="px-2 md:px-9 py-6 w-full text-[#FAFBFF]">
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col md:flex-row justify-between bg-[#14161c]  ellipsis rounded-md border border-[#4A4949] w-full p-2  md:px-6 md:py-9">
              <div className="flex w-full justify-start">
                <div className="flex flex-row items-center space-x-6">
                  <div className="w-20 md:w-32 lg:w-[183px] ">
                    <img
                      src={
                        user?.profile_pic ? user?.profile_pic : defaultProfile
                      }
                      alt="profile"
                      className="w-20 h-20 md:w-32 md:h-32 lg:w-[183px] lg:h-[183px] rounded-full border border-white border-2"
                    />
                  </div>
                  <div className="flex flex-row space-x-3 ">
                    <div className="flex flex-col p-0 container w-40 md:w-52 lg:w-64">
                      <Link to="/edit_profile" className="flex flex-row items-center ">
                        <p className="font-bold md:py-6 md:text-xl lg:text-3xl/7 font-notosans ellipsis">
                          {user?.first_name
                            ? `${user?.first_name} ${user?.last_name}`
                            : "No Name"}{" "}
                        </p>
                        <span>{EditprofileIcon}</span>
                      </Link>
                      <span className="text-[#bdbdbd] font-medium md:pb-4 md:text-xl lg:text-2xl/7">
                        {user?.designation
                          ? user?.designation
                          : "No Designation"}
                      </span>

                      <div className="weblink_contain">
                      <GlobalOutlined /> {" "}
                       <a href={user?.weblink} target="_blank" >{user?.weblink}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Followers */}
              <div className="flex flex-row items-center justify-center space-x-6 py-2 pl-2 md:w-1/3 font-notosans">
                <div className="flex flex-col space-y-2 justify-center items-center">
                  <h1 className="leading-7 font-semibold text-xl lg:text-2xl/7">
                    {user?.following_count}
                  </h1>
                  <h1 className="md:text-2xl lg:text-2xl/7 text-[#bbbbbb] font-normal">
                    Followers
                  </h1>
                </div>
                <div className="flex flex-col space-y-2 justify-center items-center">
                  <h1 className="leading-7 font-semibold text-xl lg:text-2xl/7">
                    {user?.followers_count}
                  </h1>
                  <h1 className="md:text-2xl lg:text-2xl/7 text-[#bbbbbb] font-normal">
                    Following
                  </h1>
                </div>
              </div>
            </div>
            {/* upload bar */}
            <div className="flex flex-col py-12 w-full ">
              <div className="flex flex-row justify-start space-x-4 md:space-x-8 pb-12 font-notosans">
                <h1
                  className={`text-[#9f9fa0] text-lg md:md:text-2xl  font-semibold cursor-pointer ${
                    selectTab === "uploads" &&
                    "!text-white underline md:underline-offset-[16px] decoration-[5px] decoration-white text-lg/7 md:text-2xl underline-offset-[12px]  font-bold"
                  }`}
                  onClick={() => switchTab("uploads")}
                >
                  Uploads
                </h1>
                <h1
                  className={`text-[#9f9fa0] cursor-pointer  text-lg/7 md:text-2xl  font-semibold ${
                    selectTab === "savedfilms" &&
                    "!text-white underline md:underline-offset-[16px] decoration-[5px] decoration-white text-lg/7 md:text-2xl underline-offset-[12px]  font-bold"
                  }`}
                  onClick={() => switchTab("savedfilms")}
                >
                  Saved Films
                </h1>
                <h1
                  className={`text-[#9f9fa0] text-lg/7 md:text-2xl   font-semibold cursor-pointer ${
                    selectTab === "reviews" &&
                    "!text-white underline md:underline-offset-[16px] decoration-[5px] decoration-white text-lg/7 underline-offset-[12px] md:text-2xl  font-bold"
                  }`}
                  onClick={() => switchTab("reviews")}
                >
                  Reviews Given
                </h1>
              </div>
              {/* Uploads */}
              {selectTab === "uploads" && !(approved?.results.length > 0) ? (
                <div className="py-6">
                  <h1 className="text-white text-center">No uploads found</h1>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-6 justify-start items-center">
                  {approved?.results?.map((i) => (
                    <Uploads item={i} key={i.id} />
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6 justify-start items-center">
                    {savedFilms.map((i, index) => (
                      <SavedFilms item={i.movie} key={i.id} />
                    ))}
                  </div>
                ))}

              {/* Reviews Given */}
              {selectTab === "reviews" && (
                <div className="flex flex-col  md:py-6">
                  <div className="flex flex-row  md:justify-between space-x-4 md:space-y-0">
                    <div className="md:w-2/3">
                      <Input
                        placeholder="Search for films review"
                        prefix={<SearchOutlined />}
                        className="bg-black text-white placeholder:text-gray-400 inputboxSearch"
                        onChange={handleFilterReviews}
                      />
                    </div>
                    <div className="flex justify-center md:w-1/3">
                      <div className="relative uplod_genre_div w-full ">
                        <div className="iconplacement py-3  inline-block">
                          {SwitchVeritcal}
                        </div>
                        <select
                          placeholder=""
                          defaultValue="newtoold"
                          className="inputboxSearch w-full "
                          onChange={handleSortReviews}
                        >
                          <option value="newtoold">Newest to Oldest</option>;
                          <option value="oldtonew">Oldest to Newest</option>;
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* <SearchReviewsGiven item={i} key={i.id} /> */}

                  {filterEnabled ? (
                    searchMyProfileResults.results.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 py-8 md:py-6 justify-start items-center">
                        {searchMyProfileResults.results.map((i) => (
                          <ReviewsGiven
                            item={i.movie}
                            key={i.id}
                            reviewContent={i.review_content}
                            lastUpdate={i.updated_at}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="py-6">
                        <h1 className="text-white text-center">
                          No Results Found
                        </h1>
                      </div>
                    )
                  ) : reviewsGiven.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:gap-4 py-8 md:py-6 justify-start items-center">
                      {reviewsGiven.map((i) => (
                        <ReviewsGiven
                          item={i.movie}
                          key={i.id}
                          reviewContent={i.review_content}
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
    )
  );
}

export default Myprofile;
