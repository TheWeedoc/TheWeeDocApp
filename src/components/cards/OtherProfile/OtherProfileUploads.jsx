import React from "react";
import { Card } from "antd";
import {
  ThumbsdownFill,
  ThumbsupFilled,
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

function OthersProfileUploads({ item }) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      <Link to={`/video/${item.id}`} className="w-full">
        <Card
          hoverable
          className=" bg-[#0a0a0d] text-white"
          cover={
            <img
              alt="poster"
              src={item?.image}
              className="w-full uploadspagecardimg1"
            />
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
      </Link>
    </div>
  );
}

export default OthersProfileUploads;
