import React from "react";
import { Card } from "antd";
import {
  ThumbsdownFill,
  ThumbsupFilled,
  thumbsdown,
  thumbsup,
} from "../../../Assests/Svg/Commonsvg";
import { disLikeFilm, likeFilm } from "../../../store/Home/productReducer";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
      dispatch(likeFilm(item?.id));
    } else {
      handleLoginMessage();
    }
  };

  const handleDisLike = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      dispatch(disLikeFilm(item?.id));
    } else {
      handleLoginMessage();
    }
  };

  return (
    <div className="jutify-center items-center" key={item.id}>
      <Link to={`/video/${item.id}`}>
        <Card
          hoverable
          className="w-full bg-[#0a0a0d] text-white"
          cover={<img alt="poster" src={item?.image} />}
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