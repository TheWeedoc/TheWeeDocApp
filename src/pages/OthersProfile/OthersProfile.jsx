import React, { useEffect, useState } from "react";
import Header from "../../components/Layout/Header/Header";
import OthersProfileUploads from "../../components/cards/OtherProfile/OtherProfileUploads";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  followUserOthersProfile,
  otherUserProfile,
} from "../../store/Home/userReducer";
import defaultProfile from "../../Assests/Images/Defaultprofile.png";
import {
  clearNotification,
  showNotification,
} from "../../store/Home/notificationReducer";
import { notification } from "antd";
import "./OthersProfile.css";
import { Helmet } from "react-helmet";

function OthersProfile() {
  const [selectTab, setSelectTab] = useState("uploads");
  const { id } = useParams();
  const { otherUser } = useSelector((state) => state.user);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message, type } = useSelector((state) => state.notification);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNotificationClose = () => {
    dispatch(clearNotification());
  };

  const switchTab = (tabName) => {
    setSelectTab(tabName);
  };

  const handleLoginMessage = () => {
    dispatch(
      showNotification({
        type: "warning",
        message: "Login to continue",
      })
    );
    navigate("/login");
  };

  const handleFollow = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      dispatch(followUserOthersProfile(otherUser?.username));
    } else {
      handleLoginMessage();
    }
  };

  useEffect(() => {
    dispatch(otherUserProfile(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    otherUser !== "" && (
      <>
        <Helmet>
          <title>{otherUser?.first_name}'s Profile - TheWeedoc</title>
        </Helmet>
        <Header />
        <div className="p-4 w-full text-[#FAFBFF]">
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col md:flex-row justify-between bg-[#14161c] rounded-md border border-[#4A4949] w-full p-2  md:px-6 md:py-9 ">
              <div className="flex w-full justify-start">
                <div className="flex flex-row items-center md:items-start w-full space-x-4 md:space-x-8 md:max-w-40 ">
                  <div className="w-20 md:w-32 lg:w-[183px]">
                    <img
                      src={
                        otherUser?.profile_pic
                          ? otherUser?.profile_pic
                          : defaultProfile
                      }
                      alt="profile"
                      className="w-20 h-20 md:w-32 md:h-32 lg:w-[183px] lg:h-[183px] rounded-full border border-white border-2"
                    />
                  </div>
                  <div className="flex flex-col p-0 container w-40 md:w-52 lg:w-64">
                    <h1 className="font-bold md:py-6 md:text-xl lg:text-3xl/7 font-notosans ellipsis">
                      {otherUser?.first_name
                        ? otherUser?.first_name
                        : "No Name"}{" "}
                      {otherUser?.last_name}
                    </h1>
                    <span className="text-[#bdbdbd] font-medium md:pb-4 md:text-xl lg:text-2xl/7">
                      {otherUser?.designation
                        ? otherUser?.designation
                        : "No Designation"}
                    </span>
                  </div>
                  <div className="flex items-start md:py-6">
                    <button
                      className="bg-[#2d2f35] text-white py-1 px-4 md:px-8 rounded-md followButton"
                      onClick={handleFollow}
                    >
                      {otherUser?.is_following ? "Unfollow" : "Follow"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Followers */}
              <div className="flex flex-row items-center justify-center space-x-6 py-2 pl-2 md:w-1/3 font-notosans">
                <div className="flex flex-col space-y-2 justify-center items-center">
                  <h1 className="leading-7 font-semibold text-xl lg:text-2xl/7">
                    {otherUser?.followers_count}
                  </h1>
                  <h1 className="md:text-2xl lg:text-2xl/7 text-[#bbbbbb] font-normal">
                    Followers
                  </h1>
                </div>
                <div className="flex flex-col space-y-2 justify-center items-center">
                  <h1 className="leading-7 font-semibold text-xl lg:text-2xl/7">
                    {otherUser?.following_count}
                  </h1>
                  <h1 className="md:text-2xl lg:text-2xl/7 text-[#bbbbbb] font-normal">
                    Following
                  </h1>
                </div>
              </div>
            </div>
            {/* upload bar */}
            <div className="flex flex-col py-12 w-full">
              <div className="flex flex-row justify-start space-x-4 md:space-x-8 pb-12 font-notosans">
                <h1
                  className={`text-[#9f9fa0] text-lg md:text-2xl font-semibold  cursor-pointer ${
                    selectTab === "uploads" &&
                    "!text-white underline md:underline-offset-[16px] decoration-[5px] decoration-white text-lg/7 md:text-2xl underline-offset-[12px]  font-bold"
                  }`}
                  onClick={() => switchTab("uploads")}
                >
                  Uploads
                </h1>
              </div>
              {/* Uploads */}
              {otherUser !== "" && otherUser.user_filims.length > 0 ? (
                selectTab === "uploads" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-6 justify-center items-center">
                    {otherUser.user_filims.map((i, index) => (
                      <OthersProfileUploads
                        item={i}
                        key={index}
                        followStatus={otherUser?.is_following}
                      />
                    ))}
                  </div>
                )
              ) : (
                <div className="py-6 text-center text-white">
                  <h1>No Uploads found</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default OthersProfile;
