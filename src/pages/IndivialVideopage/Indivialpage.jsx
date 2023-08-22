import React, { useEffect, useState } from "react";
import Header from "../../components/Layout/Header/Header";
import Videoplayer from "../../components/videplayer/videoplayer";
import "./indivialpage.css";
import {
  sharebtn,
  Savebtn,
  Thumbsdown,
  Thumbsup,
} from "../../Assests/Svg/Commonsvg";
import { notification } from "antd";
import CastAndCrewSlider from "../../components/cards/IndividualVideoPage/CastAndCrewSlider";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { Input } from "antd";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addReview,
  disLikeFilm,
  getProductCustomer,
  getProductDetails,
  likeFilm,
  saveFilm,
} from "../../store/Home/productReducer";
import Copylink from "../../components/videplayer/Copylink";
import { clearNotification } from "../../store/Home/notificationReducer";
const { TextArea } = Input;

function Indivialpage() {
  const { id } = useParams();
  const { isLoading, productDetails, productCustomer } = useSelector(
    (state) => state.products
  );
  const { message, type } = useSelector((state) => state.notification);
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

  // Handles
  const handleSaveFilm = (e) => {
    e.preventDefault();
    dispatch(saveFilm(productDetails?.id));
  };

  const handleLike = (e) => {
    e.preventDefault();
    dispatch(likeFilm(productDetails?.id));
  };

  const handleDisLike = (e) => {
    e.preventDefault();
    dispatch(disLikeFilm(productDetails?.id));
  };

  const handleReview = (e) => {
    e.preventDefault();
    setReview(e.target.value);
  };

  const handlePostReview = (e) => {
    e.preventDefault();

    dispatch(addReview({ id: productDetails?.id, review: review }));
    setReview("");
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
        dispatch(
          getProductCustomer({
            name: action.payload?.customer,
            id: action.payload?.id,
          })
        );
      }
    });
  }, []);

  const cardarr = [
    {
      id: "1",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "2",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "3",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "4",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "5",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "6",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "7",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "8",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "9",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "10",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "11",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "12",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "200",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "13",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "14",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "15",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "16",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "17",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
  ];
  return isLoading ? (
    <Spin indicator={antIcon} />
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
                  <Savebtn fill={productCustomer?.isSaved ? "#FFF" : "none"} />
                </div>
              </div>
            </div>

            <div className="vid-topright">
              <div className="share_text">{sharebtn} Share</div>

              <div className="likesDiv">
                <div className="cursor-pointer" onClick={handleLike}>
                  <Thumbsup />

                  {productDetails?.like_count}
                </div>
                <hr
                  style={{ borderRight: "1.4px solid #fff", height: "14px" }}
                />
                <div className="cursor-pointer" onClick={handleDisLike}>
                  <Thumbsdown
                    fill={productDetails?.has_disliked ? "#FFF" : "none"}
                  />{" "}
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

          {(productCustomer !== "" || productCustomer !== undefined) && (
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
              <button className="invid_page_followbtn">
                {productCustomer?.is_following ? "Unfollow" : "Follow"}
              </button>
            </div>
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
