import React, { useState } from "react";
import { Card } from "antd";
import {
  ThumbsdownFill,
  ThumbsupFilled,
  backIcon,
  commentIcon,
  thumbsdown,
  thumbsup,
} from "../../../Assests/Svg/Commonsvg";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  disLikeFilmOthersProfile,
  likeFilmOthersProfile,
} from "../../../store/Home/userReducer";
import { getMovieReview } from "../../../store/Home/uploadsReducer";

function OthersProfileUploads({ item, followStatus }) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { movieReview } = useSelector((state) => state.uploads);
  const [reviews, setReviews] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleReviews = () => {
    dispatch(getMovieReview(item.id)).then((action) => {
      if (action.payload.length > 0) {
        setReviews(true);
      }
    });
  };

  const handleBack = () => {
    setReviews(false);
  };

  const handleLoginMessage = () => {
    navigate("/login");
  };

  const handleLike = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      dispatch(likeFilmOthersProfile(item?.id));
    } else {
      handleLoginMessage();
    }
  };

  const handleDisLike = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      dispatch(disLikeFilmOthersProfile(item?.id));
    } else {
      handleLoginMessage();
    }
  };

  return (
    <div className="flex flex-col w-full md:w-[360-px]" key={item.id}>
      <Card
        hoverable
        className=" bg-[#0a0a0d] text-white"
        cover={
          <Link to={`/video/${item.id}`} className="w-full">
            <img
              alt="poster"
              src={item?.image}
              className="w-full uploadspagecardimg1"
            />
          </Link>
        }
        bordered={false}
      >
        <div className="flex flex-col justify-between ">
          <div className=" flex flex-row justify-between items-center text-white ">
            <div>
              <div className="font-notosans text-lg font-semibold w-36 md:w-48 lg:w-52  truncate">
                {item?.title}
              </div>
            </div>
            {followStatus && (
              <div className="relative">
                <h1
                  className="flex flex-row space-x-1 items-center "
                  onClick={handleReviews}
                >
                  {commentIcon} <span>{item?.review_count} Reviews</span>
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
            )}
          </div>
          <div className="flex flex-row items-center space-x-3">
            <div
              className="cursor-pointer flex flex-row space-x-2  items-center"
              onClick={handleLike}
            >
              {item?.has_liked ? ThumbsupFilled : thumbsup}

              <span className=" border-r-2 border-white pr-2 ">
                {item?.like_count}
              </span>
            </div>

            <div
              className="cursor-pointer flex flex-row space-x-2 items-center "
              onClick={handleDisLike}
            >
              {item?.has_disliked ? ThumbsdownFill : thumbsdown}
              <span>{item?.dislike_count}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default OthersProfileUploads;
