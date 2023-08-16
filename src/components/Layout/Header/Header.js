import React, { useEffect, useState } from "react";
import { Popover, Button } from "antd";
import "./Header.css";
import Logo from "../../../Assests/Images/theweedocLogo.png";
import {
  notificationicon,
  uploadicon,
  SearchIcon,
  Profileicon,
  HamburgerMenu,
  CloseButton,
  EditprofileIcon,
} from "../../../Assests/Svg/Commonsvg";
import { Link } from "react-router-dom";
import Notification from "../../Notification/Notification";
import useIsLoggedIn from "../../../Hooks/useIsLoggedIn";
import Profile from "../../Notification/Profile";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const userpro =
    "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png";
  const profile =
    "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png";
  const isLoggedIn = useIsLoggedIn();

  const profiledropdown = () => {
    return (
      <div className="profiledrpdwnDiv">
        <div className=""></div>
      </div>
    );
  };

  return (
    <div className="bg-headerBackground py-2 px-4 sticky top-0 z-10">
      <nav className="flex justify-between px-2">
        <div>
          <Link to="/">
            {" "}
            <img src={Logo} className="Logoclass" alt="Theweedoc" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-3 ">
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
              src={profile}
              alt="Profile Picture"
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
                ? "block absolute w-screen h-screen z-10 top-0 left-0 bg-headerBackground flex flex-col justify-evenly text-white items-start space-y-2 pl-3"
                : "hidden"
            }
          >
            <div
              className=" absolute top-0 right-0 px-8 py-8"
              onClick={toggleMenu} // change isNavOpen state to false to close the menu
            >
              <CloseButton />
            </div>
            {isLoggedIn && (
              <div className="w-5/6 bg-[#16181f] h-auto rounded-md ">
                <div className="flex flex-row px-2 py-2 justify-around">
                  <img src={profile} className="w-16 pb-3" />
                  <div className="flex flex-col pl-2 justify-center ">
                    <h1 className="text-xl font-semibold ">Sarah Williams</h1>
                    <h2 className="text-md">Director </h2>
                  </div>
                  <div className="flex items-center">{EditprofileIcon}</div>
                </div>
              </div>
            )}

            <div>
              <Link to="/upload">Upload</Link>
            </div>
            <div className="notifyDiv">
              <div>
                <Popover
                  placement="bottom"
                  content={<Notification />}
                  trigger="click"
                >
                  Notifications
                </Popover>
              </div>
              <div className="notifitionCount">2</div>
            </div>
            <div>
              <Link to="/about">About Us</Link>
            </div>
            <div>
              <Link to="/privacypolicy">Privacy Policy</Link>
            </div>
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

            {isLoggedIn && (
              <div className="flex w-full justify-center text-center">
                <Link
                  to="/logout"
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
