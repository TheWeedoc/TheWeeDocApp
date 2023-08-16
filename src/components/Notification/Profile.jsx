import React from "react";
import "./Notification.css";
import { Link } from "react-router-dom";
import {
  EditprofileIcon,
  advertisementIcon,
  informationIcon,
  notificationicon,
  privacyPoliciesIcon,
} from "../../Assests/Svg/Commonsvg";
import useIsLoggedIn from "../../Hooks/useIsLoggedIn";

function Profile() {
  const isLoggedIn = useIsLoggedIn();

  const profileImage =
    "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png";
  return (
    <div className="hidden md:flex md:flex-col md:w-64 text-white font-notosans">
      <div className="flex flex-col w-full">
        {/* Image section */}
        {!isLoggedIn ? (
          <Link to="/myprofile">
            <div className="w-full bg-[#16181f] h-auto rounded-md items-center ">
              <div className="flex flex-row px-2 py-2 justify-around items-center">
                <img src={profileImage} className="w-12 h-12 " />
                <div className="flex flex-col pl-2 justify-center ">
                  <h4 className="text-md font-semibold ">Sarah Williams</h4>
                  <h5 className="text-md">Director </h5>
                </div>

                <Link to="/edit_profile">
                  <div className="flex items-center">{EditprofileIcon}</div>
                </Link>
              </div>
            </div>
          </Link>
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
            <div> {advertisementIcon}</div> <Link>Upload Advertisement</Link>
          </div>
          <div className="flex flex-row justify-start items-center space-x-2">
            <div> {informationIcon}</div> <Link>About </Link>
          </div>
        </div>
      </div>
      <div className="pt-10">
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

        {isLoggedIn && (
          <div className="flex w-full justify-center text-center">
            <Link
              to="/logout"
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
