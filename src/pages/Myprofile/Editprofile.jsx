import React, { useEffect, useState } from "react";
import { backIcon, cameraIcon } from "../../Assests/Svg/Commonsvg";
import { Input, notification } from "antd";
import Header from "../../components/Layout/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/Home/userReducer";
import { clearNotification } from "../../store/Home/notificationReducer";
import defaultProfile from "../../Assests/Images/Defaultprofile.png";
import "./Editprofile.css";
import { Helmet } from "react-helmet";
import Loader from "../../components/loader/Loader";

function Editprofile() {
  const { user } = useSelector((state) => state.user);
  const[isLoading,setIsLoading]= useState(false)
  const [userDetails, setUserDetails] = useState({
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    designation: user?.designation || '',
    preview: "",
    profilePicChange: false,
    weblink: user?.weblink || ''
  });

  const [profileFile, setProfileFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, type } = useSelector((state) => state.notification);

  const handleNotificationClose = () => {
    dispatch(clearNotification());
  };
 


  useEffect(() => {
    if (message) {
      notification[type]({
        message: message,
        duration: 2, // Display time in seconds
        onClose: handleNotificationClose,
        placement: "topRight",
      });
    }
  }, [message]);

  if(isLoading){
    return(
      <Loader/>
    ) 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleProfilePic = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileFile(file);
      setUserDetails({
        ...userDetails,
        preview: URL.createObjectURL(file),
        profilePicChange: true,
      });
    }
  };


  const handleSave = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const updatedApiData = new FormData();

    if (userDetails.first_name !== user.first_name && userDetails.first_name !== "") {
      updatedApiData.append("first_name", userDetails.first_name);
    }
    if (userDetails.last_name !== user.last_name && userDetails.last_name !== "") {
      updatedApiData.append("last_name", userDetails.last_name);
    }
    if (userDetails.designation !== user?.designation && userDetails.designation !== "") {
      updatedApiData.append("designation", userDetails.designation);
    }
    if (userDetails.profilePicChange && profileFile !== null) {
      updatedApiData.append("profile_pic", profileFile);
    }
    if (userDetails.weblink && userDetails.weblink !== user?.weblink) {
      updatedApiData.append("weblink", userDetails.weblink);
    }

    try {
       dispatch(updateUser(updatedApiData));
      navigate("/myprofile");
    }  finally {
      setIsLoading(false); 
    }
  };

  return (
    <>
      <Helmet>
        <title>Edit Profile - TheWeedoc</title>
      </Helmet>
      <Header />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex p-3 w-full justify-center md:w-10/12">
          <div className="flex flex-col justify-between bg-[#14161c] rounded-md border border-[#4A4949] w-full p-3 space-y-4 md:px-3 md:py-6">
            <div className="flex flex-row justify-between items-center">
              <Link to="/myprofile">
                <div className="flex flex-row space-x-3 items-center">
                  <div style={{ display: "inline-block", borderRadius: "50%", backgroundColor: "#1e1f21", padding: "4px" }}>
                    {backIcon}
                  </div>
                  <span className="font-notosans editprofileText text-white">Edit Profile</span>
                </div>
              </Link>
              <div className="full">
                <button className="bg-white px-6 rounded-lg py-2 savetxt" onClick={handleSave}>Save</button>
              </div>
            </div>
            <div className="text-white w-full pt-10">
              <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
                <div className="flex flex-col justify-center space-y-4 items-center md:w-3/6">
                  <div className="w-26">
                    <img
                      src={
                        userDetails.preview !== ""
                          ? userDetails.preview
                          : user?.profile_pic
                            ? user?.profile_pic
                            : defaultProfile
                      }
                      alt="profile"
                      className="editImage rounded-full border border-white border-4"
                    />
                  </div>
                  <label htmlFor="profilePicInput" className="cursor-pointer">
                    <div className="flex flex-row items-center">
                      <input
                        type="file"
                        onChange={handleProfilePic}
                        className="hidden"
                        id="profilePicInput"
                        accept="image/*"
                      />
                      <div style={{ display: "inline-block", borderRadius: "50%", backgroundColor: "#1e1f21", padding: "4px" }}>
                        {cameraIcon}
                      </div>
                      <span className="shrink-0">Change Profile picture</span>
                    </div>
                  </label>
                </div>
                <div className="flex flex-col w-full md:3/6 pt-10 md:pt-0 space-y-6">
                  <div className="flex flex-col w-full md:w-3/6 justify-center space-y-2">
                    <label htmlFor="firstname" className="userlabels">Firstname:</label>
                    <Input
                      id="firstname"
                      name="first_name"
                      value={userDetails.first_name}
                      onChange={handleInputChange}
                      className="userinputs bg-transparent text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-3/6 justify-center space-y-2">
                    <label htmlFor="lastname" className="userlabels">Lastname:</label>
                    <Input
                      id="lastname"
                      name="last_name"
                      value={userDetails.last_name}
                      onChange={handleInputChange}
                      className="userinputs bg-transparent text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-3/6 space-y-2">
                    <label htmlFor="role" className="userlablerole">Your role or position or occupation:</label>
                    <Input
                      id="role"
                      name="designation"
                      value={userDetails.designation}
                      onChange={handleInputChange}
                      className="userinputs bg-transparent text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-3/6 space-y-2">
                    <label htmlFor="weblink" className="userlablerole">Your social link:</label>
                    <Input
                      id="weblink"
                      name="weblink"
                      value={userDetails.weblink}
                      onChange={handleInputChange}
                      className="userinputs bg-transparent text-white placeholder:text-gray-400"
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
