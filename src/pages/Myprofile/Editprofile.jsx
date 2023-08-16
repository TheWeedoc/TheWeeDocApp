import React from "react";
import {
  EditprofileIcon,
  backIcon,
  cameraIcon,
} from "../../Assests/Svg/Commonsvg";
import { Input } from "antd";
import Header from "../../components/Layout/Header/Header";
import { Link } from "react-router-dom";

function Editprofile() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex p-3 w-full justify-center md:w-10/12">
          <div className="flex flex-col justify-between bg-[#14161c] rounded-md border border-[#4A4949] w-full p-3 space-y-4  md:px-3 md:py-6 md:w-10/12">
            <div className="flex flex-row justify-between items-center">
              <Link to="/myprofile">
                <div className="flex flex-row space-x-3 items-center">
                  {" "}
                  <div
                    style={{
                      display: "inline-block",
                      borderRadius: "50%",
                      backgroundColor: "#1e1f21",
                      padding: "4px",
                    }}
                  >
                    {backIcon}
                  </div>{" "}
                  <span className="font-notosans font-semibold text-lg text-white">
                    Edit Profile
                  </span>
                </div>
              </Link>

              <div className="full">
                <button className="bg-white px-6 rounded-lg py-2">Save</button>
              </div>
            </div>
            <div className="text-white w-full ">
              <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8 ">
                <div className="flex flex-col justify-center items-center md:w-3/6">
                  <div className="w-26">
                    <img
                      src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI="
                      alt="profile"
                      className="w-24 h-24 rounded-full border border-white border-4"
                    />
                  </div>
                  <div className="flex flex-row items-center   ">
                    <div
                      style={{
                        display: "inline-block",
                        borderRadius: "50%",
                        backgroundColor: "#1e1f21",
                        padding: "4px",
                      }}
                    >
                      {cameraIcon}
                    </div>
                    <span className="shrink-0">Change Profile picture</span>
                  </div>
                </div>
                <div className="flex flex-col w-full md:3/6 ">
                  <div className="flex flex-col w-full md:w-3/6 justify-center ">
                    <label htmlFor="username" className="text-gray-400 w-full">
                      Username:
                    </label>
                    <Input
                      id="username"
                      value="Nirmal"
                      className="bg-black text-white placeholder:text-gray-400"
                    />
                  </div>

                  <div className="flex flex-col w-full md:w-3/6 ">
                    <label htmlFor="role" className="text-gray-400">
                      your role or position or occupation:
                    </label>
                    <Input
                      id="role"
                      value="Director"
                      className="bg-black text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Editprofile;
