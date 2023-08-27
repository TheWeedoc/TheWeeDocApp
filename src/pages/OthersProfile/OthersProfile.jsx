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
    if (otherUser === "") dispatch(otherUserProfile(id));
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
    <>
      <Header />
      <div className="p-4 w-full text-[#FAFBFF]">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col md:flex-row justify-between bg-[#14161c] rounded-md border border-[#4A4949] w-full p-2  md:px-3 md:py-6 md:w-10/12">
            <div className="flex justify-center w-full lg:justify-start">
              <div className="flex flex-row items-center  space-x-8 md:max-w-40 ">
                <div className="w-24">
                  <img
                    src={
                      otherUser?.profile_pic
                        ? otherUser?.profile_pic
                        : defaultProfile
                    }
                    alt="profile"
                    className="w-[80px] h-[80px] md:w-24 md:h-24 rounded-full border border-white border-4"
                  />
                </div>
                <div className="p-0 ">
                  <h1 className="profile_name">
                    {otherUser?.first_name ? otherUser?.first_name : "No Name"}{" "}
                    {otherUser?.last_name}
                  </h1>
                  <span className="text-gray-400 mt-4">
                    {otherUser?.designation
                      ? otherUser?.designation
                      : "No Designation"}
                  </span>
                </div>
                <div className="flex items-center">
                  <button
                    className="bg-[#2d2f35] text-white py-1 px-4 rounded-md"
                    onClick={handleFollow}
                  >
                    {otherUser?.is_following ? "Unfollow" : "Follow"}
                  </button>
                </div>
              </div>
            </div>

            {/* Followers */}
            <div className="flex flex-row items-center justify-center space-x-6 py-2 md:w-1/3">
              <div className="flex flex-col space-y-2 justify-center items-center">
                <h1>{otherUser?.followers_count}</h1>
                <h1>Followers</h1>
              </div>
              <div className="flex flex-col space-y-2 justify-center items-center">
                <h1>{otherUser?.following_count}</h1>
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
            {otherUser !== "" && otherUser.user_filims.length > 0 ? (
              selectTab === "uploads" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6 justify-center items-center">
                  {otherUser.user_filims.map((i, index) => (
                    <OthersProfileUploads item={i} key={index} />
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
  );
}

export default OthersProfile;
