import React from "react";
import "./Notification.css";
import { Link, useNavigate } from "react-router-dom";
import {
  EditprofileIcon,
  advertisementIcon,
  informationIcon,
  notificationicon,
  privacyPoliciesIcon,
} from "../../Assests/Svg/Commonsvg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/Home/authReducer";

function Profile() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profileImage =
    "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png";

  const handleNavgiation = () => {
    navigate("/myprofile");
  };

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      navigate("/login");
    });
  };
  return (
    <div className="hidden md:flex md:flex-col md:w-64 text-white font-notosans">
      <div className="flex flex-col w-full">
        {/* Image section */}
        {isLoggedIn ? (
          <div
            className="w-full bg-[#16181f] h-auto rounded-md items-center cursor-pointer"
            onClick={handleNavgiation}
          >
            <div className="flex flex-row px-2 py-2 justify-around items-center container">
              <img
                src={user?.profile_pic ? user?.profile_pic : profileImage}
                className="w-12 h-12 rounded-full border border-white "
                alt="profilePic"
              />
              <div className="flex flex-col pl-2 justify-center container">
                <h4 className="text-md font-semibold ellipsis">
                  {user?.username}
                </h4>
                <h5 className="text-md">Director </h5>
              </div>

              <div className="flex items-center">
                {" "}
                <Link to="/edit_profile">{EditprofileIcon}</Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-row space-x-2  items-center p-4">
            <div>
              <img src={profileImage} alt="profile" className="w-12 h-12" />
            </div>
            <div>
              <h4 className="font-notosans font-semibold Capitalize">Guest</h4>
            </div>
          </div>
        )}
        <hr className="border-[#353538] px-4" />
        {/* Links */}
        <div className="flex flex-col p-4 space-y-3">
          <div className="flex flex-row justify-start items-center space-x-2">
            <div> {privacyPoliciesIcon}</div>{" "}
            <Link to="/privacypolicy">Privacy Policies</Link>
          </div>
          <div className="flex flex-row justify-start items-center space-x-2">
            <div> {notificationicon}</div> <Link>Notification</Link>
          </div>
          <div className="flex flex-row justify-start items-center space-x-2">
            <div> {advertisementIcon}</div>{" "}
            <Link to="/uploadads">Upload Advertisement</Link>
          </div>
          <div className="flex flex-row justify-start items-center space-x-2">
            <div> {informationIcon}</div> <Link>About </Link>
          </div>
        </div>
      </div>
      <div className="pt-10">
        {!isLoggedIn && (
          <div className="flex flex-col w-full space-y-2">
            <div className="flex w-full justify-center text-center">
              <Link
                to="/login"
                className="border border-white bg-headerBackground w-full py-2 rounded-md"
              >
                Login
              </Link>
            </div>
            <div className="flex w-full justify-center text-center">
              <Link
                to="/signup"
                className="border border-black bg-white text-black  w-full py-2 rounded-md"
              >
                Signup
              </Link>
            </div>
          </div>
        )}

        {isLoggedIn && (
          <div className="flex w-full justify-center text-center">
            <Link
              onClick={handleLogout}
              className="border border-black bg-white text-black  w-full py-2 rounded-md"
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
