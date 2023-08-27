import React, { useEffect, useState } from "react";
import { Popover } from "antd";
import "./Header.css";
import Logo from "../../../Assests/Images/theweedocLogo.png";
import {
  notificationicon,
  uploadicon,
  SearchIcon,
  HamburgerMenu,
  CloseButton,
  EditprofileIcon,
} from "../../../Assests/Svg/Commonsvg";
import { Link, useNavigate } from "react-router-dom";
import Notification from "../../Notification/Notification";

import Profile from "../../Notification/Profile";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../store/Home/userReducer";
import { logout } from "../../../store/Home/authReducer";
import defaultProfile from "../../../Assests/Images/Defaultprofile.png";
import Suggest from "../../cards/IndividualVideoPage/Suggest";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (user === "" && isLoggedIn) dispatch(getUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="bg-headerBackground py-2 px-2 md:px-12 sticky top-0 z-10">
      <nav className="flex justify-between px-2">
        <div>
          <Link to="/">
            {" "}
            <img src={Logo} className="Logoclass" alt="Theweedoc" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-7 ">
          <div>
            <Link to="/search">{SearchIcon}</Link>
          </div>
          <div>
            <Link to="/upload">{uploadicon}</Link>
          </div>
          <div className="notifyDiv">
            <div>
              <Popover
                placement="bottom"
                content={<Notification />}
                trigger="click"
              >
                {notificationicon}
              </Popover>
            </div>
            <div className="notifitionCount">2</div>
          </div>
          <Popover placement="bottom" content={<Profile />} trigger="click">
            <img
              src={user?.profile_pic ? user?.profile_pic : defaultProfile}
              alt="Profile_Picture"
              className="profilePictureDiv"
            />
          </Popover>
          {/* {isLoggedIn ? (
            <div >
              <img src={userpro} alt="Profile Picture" className="profilePictureDiv" />
            </div>
          ) : (
            <div>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button className="Loginbtn">Login</button>
              </Link>
            </div>
          )} */}
        </div>

        <div className="md:hidden flex items-center gap-3 z-10">
          <div>
            <Link to="/search">{SearchIcon}</Link>
          </div>
          <div onClick={toggleMenu}>
            <HamburgerMenu />
          </div>
          <div
            className={
              menuOpen
                ? "block absolute w-screen h-screen z-10 top-0 left-0 bg-headerBackground flex flex-col  text-white items-start space-y-6 p-3"
                : "hidden"
            }
          >
            <div
              className="flex w-full justify-end px-8 py-8"
              onClick={toggleMenu} // change isNavOpen state to false to close the menu
            >
              <CloseButton />
            </div>
            <div className="flex flex-col w-full  space-y-6">
              <div className="flex justify-center items-center">
                {isLoggedIn && (
                  <div className="w-11/12 bg-[#16181f] h-auto rounded-md cointainer">
                    <Link to="/myprofile">
                      <div className="flex flex-row px-2 py-2 justify-around">
                        <img
                          src={
                            user?.profile_pic
                              ? user?.profile_pic
                              : defaultProfile
                          }
                          className="w-16 pb-3"
                          alt="ProfilePic"
                        />
                        <div className="flex flex-col pl-2 justify-center container">
                          <h1 className="text-xl font-semibold ellipsis">
                            {user?.username}
                          </h1>
                          <h2 className="text-md">Director </h2>
                        </div>
                        <div className="flex items-center">
                          {EditprofileIcon}
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <div className="flex justify-center items-center">
                <div className="flex flex-col text-2xl font-semibold space-y-3 w-4/5">
                  <div>
                    <Link to="/upload">Upload</Link>
                  </div>
                  <div className="">
                    <div>
                      <Popover
                        placement="bottom"
                        content={<Notification />}
                        trigger="click"
                      >
                        Notifications
                      </Popover>
                    </div>
                    {/* <div className="notifitionCount">2</div> */}
                  </div>
                  <div>
                    <Link to="/about">About Us</Link>
                  </div>
                  <div>
                    <Link to="/privacypolicy">Privacy Policy</Link>
                  </div>
                </div>
              </div>
            </div>
            {!isLoggedIn && (
              <div className="flex flex-col w-full space-y-2">
                <div className="flex w-full justify-center text-center">
                  <Link
                    to="/login"
                    className="border border-white bg-headerBackground w-4/5 p-3 rounded-md"
                  >
                    Login
                  </Link>
                </div>
                <div className="flex w-full justify-center text-center">
                  <Link
                    to="/signup"
                    className="border border-black bg-white text-black  w-4/5 p-3 rounded-md"
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
                  className="border border-black bg-white text-black  w-4/5 p-3 rounded-md"
                >
                  Logout
                </Link>
              </div>
            )}

            {/* {isLoggedIn ? (
            <div >
              <img src={userpro} alt="Profile Picture" className="profilePictureDiv" />
            </div>
          ) : (
            <div>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button className="Loginbtn">Login</button>
              </Link>
            </div>
          )} */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
