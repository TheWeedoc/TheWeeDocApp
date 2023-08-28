import React, { useState } from "react";
import { Button, Card, message } from "antd";
import {
  backIcon,
  commentIcon,
  sharebtn,
  thumbsdown,
  thumbsup,
} from "../../../Assests/Svg/Commonsvg";
import "./ReviewsGiven.css";

import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getMovieReview } from "../../../store/Home/uploadsReducer";

function Uploads({ item }) {
  const [reviews, setReviews] = useState(false);
  const { movieReview } = useSelector((state) => state.uploads);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate(`/video/${item.id}`);
  };
  const handleButton = (e) => {
    e.preventDefault();
    message.success("Delete Request sent");
  };

  const handleReviews = () => {
    setReviews(true);
    dispatch(getMovieReview(item.id));
  };

  const handleBack = () => {
    setReviews(false);
  };

  return (
    <div className="jutify-start items-center" key={item?.id}>
      <Card
        hoverable
        className="w-full bg-[#0a0a0d] text-white group hover:shadow-2xl relative"
        cover={
          <img
            alt="poster"
            src={item?.image}
            className="homepagecardimg1"
            onClick={handleClick}
          />
        }
        bordered={false}
      >
        <div className="flex flex-col justify-between ">
          <div className=" flex flex-row justify-between items-center text-white ">
            <div>
              <div className="font-notosans card-title w-36 md:w-48 lg:w-52  truncate">
                {item?.title}
              </div>
            </div>
            <div className="relative">
              <h1
                className="flex flex-row space-x-1 items-center "
                onClick={handleReviews}
              >
                {commentIcon} <span>20 Reviews</span>
              </h1>

              {reviews ? (
                <div className="absolute top-5 right-0 bg-[#0F1015]  py-2 w-80 z-50 rounded-md font-notosans">
                  <div
                    className="flex flex-row w-full items-center pb-6 pl-3"
                    onClick={handleBack}
                  >
                    {backIcon}{" "}
                    <span className="review-heading pl-3">Reviews</span>
                  </div>
                  <div className="py-1 px-4 space-y-4 h-96 overflow-scroll divide-y-2 divide-gray-700 ">
                    {movieReview.length > 0 &&
                      movieReview.map((i) => (
                        <div className="flex flex-col pt-2" key={i.id}>
                          <div className="flex flex-row items-center">
                            <img
                              src={i?.user?.profile_pic}
                              alt="Profile_pic"
                              className="w-14 h-14 rounded-full"
                            />
                            <div className="container pl-2">
                              <h1 className="flex flex-col ellipsis reviewer-name">
                                {i?.user?.first_name} {i?.user?.last_name}
                              </h1>
                              <p className="reviewer-timeago">2 days ago</p>{" "}
                            </div>
                          </div>
                          <div>
                            <p className="review-content">
                              {i?.review_content}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex flex-row items-center space-x-3 pt-4">
            <div className="flex flex-row items-center space-x-2 pr-2 border-r-[0.3px] border-[#cbd0d9]">
              {thumbsup} <span>{item?.like_count}</span>
            </div>
            <div className="flex flex-row items-center space-x-2 pr-2 border-r-[0.3px] border-[#cbd0d9]">
              {thumbsdown} <span>{item?.dislike_count}</span>
            </div>
            <div className="flex flex-row items-center space-x-2">
              {sharebtn} <span>20</span>
            </div>
          </div>
          {!reviews && (
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity ">
              <Button
                className="bg-[#16181f] border-[#4a4949] border-2 request-delete text-white font-notosans "
                onClick={handleButton}
              >
                Request Delete
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

export default Uploads;
