import React, { useEffect, useState } from "react";
import Header from "../../components/Layout/Header/Header";
import Videoplayer from "../../components/videplayer/videoplayer";
import "./indivialpage.css";
import {
  sharebtn,
  Savebtn,
  thumbsup,
  ThumbsupFilled,
  thumbsdown,
  ThumbsdownFill,
} from "../../Assests/Svg/Commonsvg";
import { notification } from "antd";
import CastAndCrewSlider from "../../components/cards/IndividualVideoPage/CastAndCrewSlider";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { Input } from "antd";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addReview,
  disLikeFilm,
  followUser,
  getProductCustomer,
  getProductCustomerSaved,
  getProductDetails,
  likeFilm,
  saveFilm,
} from "../../store/Home/productReducer";
import Copylink from "../../components/videplayer/Copylink";
import {
  clearNotification,
  showNotification,
} from "../../store/Home/notificationReducer";
import { Link } from "react-router-dom";
const { TextArea } = Input;

function Indivialpage() {
  const { id } = useParams();
  const { isLoading, productDetails, productCustomer, productCustomerSaved } =
    useSelector((state) => state.products);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message, type } = useSelector((state) => state.notification);
  const navigate = useNavigate();
  const handleNotificationClose = () => {
    dispatch(clearNotification());
  };

  const [review, setReview] = useState("");
  const dispatch = useDispatch();
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  let resultString = "";

  const handleLoginMessage = () => {
    dispatch(
      showNotification({
        type: "warning",
        message: "Login to continue",
      })
    );
    navigate("/login");
  };

  // Handles
  const handleSaveFilm = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      dispatch(saveFilm(productDetails?.id));
    } else {
      handleLoginMessage();
    }
  };

  const handleLike = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      dispatch(likeFilm(productDetails?.id));
    } else {
      handleLoginMessage();
    }
  };

  const handleDisLike = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      dispatch(disLikeFilm(productDetails?.id));
    } else {
      handleLoginMessage();
    }
  };

  const handleReview = (e) => {
    e.preventDefault();
    setReview(e.target.value);
  };

  const handlePostReview = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      dispatch(addReview({ id: productDetails?.id, review: review }));
      setReview("");
    } else {
      handleLoginMessage();
    }
  };

  const handleFollow = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      dispatch(followUser(productCustomer?.username));
    } else {
      handleLoginMessage();
    }
  };

  useEffect(() => {
    if (message) {
      notification[type]({
        message: message,
        duration: 2, // Display time in seconds
        onClose: handleNotificationClose,
        placement: "bottomRight",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  if (productDetails) {
    const genresString = productDetails?.genere
      ?.map((genre) => genre.name)
      .join(" | ");
    const ageString = productDetails?.age?.replace(/\D/g, "");
    resultString = `${genresString} | ${productDetails?.language} | ${ageString}+`;
  }

  useEffect(() => {
    dispatch(getProductDetails(id)).then((action) => {
      if (
        action.payload?.customer !== "" ||
        action.payload?.customer !== null
      ) {
        dispatch(getProductCustomer(action.payload?.customer));

        if (isLoggedIn) dispatch(getProductCustomerSaved(action.payload?.id));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <div className="h-screen w-screen flex justify-center items-center ">
      <Spin indicator={antIcon} />
    </div>
  ) : (
    productDetails !== "" && (
      <>
        <Header />
        <div className="indivialpage-main-Div">
          <Videoplayer
            thumbnail={productDetails?.image}
            videoUrl={productDetails?.video}
          />
          <div className="vid-topDiv flex flex-col space-y-2 md:space-y-0 md:flex-row">
            <div className="vid-topleft">
              <h1>{productDetails?.title}</h1>
              <div
                onClick={handleSaveFilm}
                className="options_div border border-[#545455] p-2 rounded-md"
              >
                <div>
                  <Savebtn fill={productCustomerSaved ? "#FFF" : "none"} />
                </div>
              </div>
            </div>

            <div className="vid-topright">
              <div className="share_text">{sharebtn} Share</div>

              <div className="likesDiv">
                <div className="cursor-pointer" onClick={handleLike}>
                  {productDetails?.has_liked ? ThumbsupFilled : thumbsup}

                  {productDetails?.like_count}
                </div>
                <hr
                  style={{ borderRight: "1.4px solid #fff", height: "14px" }}
                />
                <div className="cursor-pointer" onClick={handleDisLike}>
                  {productDetails?.has_disliked ? ThumbsdownFill : thumbsdown}
                  {productDetails?.dislike_count}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center text-white">
            <div className="details-div capitalize">{resultString}</div>
            <div className="flex justify-center md:items-center">
              <Copylink />
            </div>
          </div>
          <div className="flex flex-col w-full py-6 space-y-4">
            <div className="w-full">
              <TextArea
                className="bg-[#0a0a0d] text-white placeholder:text-gray-400"
                rows={4}
                placeholder="Write the films's review"
                value={review}
                onChange={handleReview}
              />
            </div>
            <div className="flex justify-center md:justify-end">
              <button
                onClick={handlePostReview}
                className="bg-white text-black font-notosans  justify-center rounded-lg px-4 py-1"
              >
                Post Review
              </button>
            </div>
          </div>

          {productCustomer !== "" && productCustomer !== undefined && (
            <Link to={`/profile/${productCustomer?.id}`}>
              <div className="userprofileSec">
                <div className="pro_imgDiv">
                  <img
                    src={productCustomer?.profile_pic}
                    className="profilepic"
                    alt="ProfilePicture"
                  />
                </div>

                <div className="pro_textDiv">
                  <b>{productDetails?.customer}</b>
                  <small>167 Followers</small>
                </div>
                <button className="invid_page_followbtn" onClick={handleFollow}>
                  {productCustomer?.is_following ? "Unfollow" : "Follow"}
                </button>
              </div>
            </Link>
          )}

          <div className="indivl_page_cnt py-6">
            <p>
              {productDetails?.description
                ? productDetails?.description
                : "No Description"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center py-6 space-y-6">
            <h1 className="font-semibold text-white font-notosans text-lg text-left w-full md:px-10">
              Cast & Crew{" "}
            </h1>
            <CastAndCrewSlider castAndCrewData={productDetails?.cast} />
          </div>
        </div>
      </>
    )
  );
}

export default Indivialpage;
