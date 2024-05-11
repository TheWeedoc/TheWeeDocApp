import React, { useState, useEffect } from "react";
import LogoImage from "../../Assests/Images/LogoImage.png";
import LogoImageMobile from "../../Assests/Images/LogoImageMobile.png";

import { Link, useNavigate } from "react-router-dom";
import {
  cameraIcon,
  leftArrow,
  rightArrowBlack,
} from "../../Assests/Svg/Commonsvg";
import profileImage from "../../Assests/Images/ProfileImage.png";
import "./Loginflow.css";
import { useDispatch } from "react-redux";
import { getUser, updateUser } from "../../store/Home/userReducer";
import { GetLanuages, preferedLanguages } from "../../Api/Fetchclient";
import { Select } from "antd";
const { Option } = Select;

function SignupQuestions() {
  const [details, setDetails] = useState({
    day: "",
    month: "",
    year: "",
    gender: "",
    location: "",
    postalcode: "",
    preview: "",
    languages:[]
  });
  const [profileFile, setProfileFile] = useState(null);
  const [lang, setlang] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    getlang();
  }, []);

  const handleProfilePic = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file) {
      setProfileFile(file);
      setDetails({
        ...details,
        preview: URL.createObjectURL(file),
      });
    }
  };

  const getlang = async () => {
    const reps = await GetLanuages().then((resp) => {
      setlang(resp);
    });
  };

  const handleLanguageChange = (selectedLanguages) => {
    setDetails({ ...details, languages: selectedLanguages });
  };

  const handleGenderChange = (event) => {
    setDetails({ ...details, gender: event.target.value });
  };

  const handleLocationChange = (event) => {
    setDetails({ ...details, location: event.target.value });
  };

  const handlePostalCodeChange = (event) => {
    setDetails({ ...details, postalcode: event.target.value });
  };

  const handleDay = (event) => {
    console.log(event.target.value);
    setDetails({ ...details, day: event.target.value });
  };
  const handleMonth = (event) => {
    setDetails({ ...details, month: event.target.value });
  };

  const handleYear = (event) => {
    setDetails({ ...details, year: event.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!(step > 5)) setStep(step + 1);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    if (!(step < 2)) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let dateofbirth = "";
    if (details.day !== "" && details.month !== "" && details.year !== "") {
      dateofbirth = `${details?.day}-${details?.month}-${details.year}`;
    }
  
    const updatedApiData = new FormData();
  
    if (dateofbirth !== "") {
      updatedApiData.append("dob", dateofbirth);
    }
    if (details.gender !== "") {
      updatedApiData.append("gender", details.gender);
    }
    if (details.location !== "") {
      updatedApiData.append("location", details.location);
    }
    if (details.preview && profileFile !== null) {
      updatedApiData.append("profile_pic", profileFile);
    }
    if (details.postalcode !== "") {
      updatedApiData.append("postal_code", details.postalcode);
    }
  
    const sendlanguage = async () => {
      await preferedLanguages({ languages: details?.languages });
    };
    sendlanguage();
  
    dispatch(updateUser(updatedApiData)).then(() => {
      navigate("/");
      dispatch(getUser())
    });
  };
  

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  return (
    <div className="flex flex-col h-screen bg-[#030606] text-[#fafbff] font-notosans">
      {/* Header */}
      <header className="p-4">
        {/* <div className="flex items-center">
          <img src={Logo} alt="Logo" className="" />

        </div> */}
        <div className=" hidden md:block flex items-center gap-20 ">
          <h1>
            <Link to="/" className="flex flex-row items-center">
              {" "}
              <img src={LogoImage} alt="TheWeeDocLogo" />{" "}
            </Link>
          </h1>
        </div>

        <div className="flex items-center justify-center gap-20 md:hidden ">
          <h1>
            <Link to="/" className="flex flex-row items-center">
              {" "}
              <img src={LogoImageMobile} alt="TheWeeDocLogo" />{" "}
            </Link>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center space-y-6 flex-grow px-3">
        <div className="w-full">
          <div className="w-full">
            <h1 className="text-center signupQuesHeading">
              Tell us a little about yourself to personalize the platform for
              you!
            </h1>

            <div className="flex justify-center w-full">
              <div className="flex flex-col py-4 w-full md:w-10/12 justify-center items-center">
                <div className="w-full space-y-3">
                  <h2 className="signupQuesStep">Step {step} of 5</h2>
                  <div className="bg-[#d9d9d9] w-full h-2 rounded-lg">
                    <div
                      style={{ width: `${(step / 5) * 100}%` }}
                      className=" h-full rounded-lg bg-[#e39724]"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Step 1 Date of birth   */}
          {step === 1 && (
            <div className="flex flex-col justify-center items-center  py-4">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-full">
                  <h1 className="text-left signupQuesuploadImg">
                    Date of Birth
                  </h1>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="relative">
                    <select
                      className="block w-16 p-2 rounded border border-[#bababa] text-[#fafbff] bg-transparent focus:border-white"
                      onChange={handleDay}
                    >
                      {/* Options for Day */}
                      {Array.from({ length: 31 }, (_, index) => (
                        <option
                          className="bg-slate-900"
                          key={index}
                          value={index + 1}
                        >
                          {index + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative">
                    <select
                      className="block w-24 p-2 rounded border border-[#bababa] bg-[#030606] text-[#fafbff] bg-transparent focus:border-white"
                      onChange={handleMonth}
                    >
                      {/* Options for Month */}
                      {[
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                      ].map((month, index) => (
                        <option
                          key={index}
                          value={index + 1}
                          className="bg-slate-900"
                        >
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative">
                    <select
                      className="block w-20 p-2 rounded border border-[#bababa] text-[#fafbff] bg-transparent focus:border-white"
                      onChange={handleYear}
                    >
                      {/* Options for Year */}
                      {Array.from({ length: 150 }, (_, index) => (
                        <option
                          key={index}
                          value={currentYear - index}
                          className="bg-slate-900 "
                        >
                          {2023 - index}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2 Select Gender */}

          {step === 2 && (
            <div className="flex flex-col justify-center items-center  py-4">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-full">
                  <h1 className="text-left signupQuesuploadImg">Gender</h1>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={details.gender === "male"}
                        onChange={handleGenderChange}
                      />
                      <span className="signupQuesGender">Male</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={details.gender === "female"}
                        onChange={handleGenderChange}
                      />
                      <span className="signupQuesGender">Female</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="gender"
                        value="neutral"
                        checked={details.gender === "neutral"}
                        onChange={handleGenderChange}
                      />
                      <span className="signupQuesGender">Neutral</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 Select Location and Postal code */}
          {step === 3 && (
            <div className="flex flex-col justify-center items-center  py-4">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2 w-full">
                  {/* Location Dropdown */}
                  <div className="flex flex-col space-y-2 md:w-1/2">
                    <label className="signupQuesuploadImg">Location</label>
                    <select
                      className="p-2 rounded  border border-[#bababa] text-[#fafbff] bg-transparent focus:border-white"
                      value={details.location}
                      onChange={handleLocationChange}
                    >
                      {indianStates.map((state) => (
                        <option
                          key={state}
                          value={state}
                          className="bg-slate-900 "
                        >
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Postal Code Input */}
                  <div className="flex flex-col space-y-2 md:w-1/2">
                    <label className=" signupQuesuploadImg">Postal Code</label>
                    <input
                      name="postal-code"
                      type="text"
                      className="p-2 border rounded border-[#bababa] text-[#fafbff] bg-transparent focus:border-white"
                      value={details.postalcode}
                      onChange={handlePostalCodeChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="flex flex-col justify-center items-center py-4">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-full">
                  <h1 className="text-left signupQuesuploadImg">
                    Select Your Preferred Languages
                  </h1>
                </div>
                <div className="w-full">
                  <Select
                    mode="multiple"
                    showSearch
                    placeholder="Select languages"
                    value={details.languages || []}
                    onChange={handleLanguageChange}
                    style={{ width: "100%" }}
                  >
                    {lang &&
                      lang.map((language) => (
                        <Option key={language.id} value={language.id}>
                          {language.name}
                        </Option>
                      ))}
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 5 Select Location and Postal code */}
          {step === 5 && (
            <div className="flex flex-col justify-center items-center  py-4">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div>
                  {" "}
                  <h1 className="font-notosans signupImgaPagetext pb-9">
                    Upload Your Profile Picture
                  </h1>{" "}
                </div>
                <label htmlFor="profilePicInput" className="cursor-pointer">
                  <input
                    accept="image/*"
                    id="profilePicInput"
                    type="file"
                    onChange={handleProfilePic}
                    className="hidden"
                  />
                  <div className="flex items-center justify-center">
                    <img
                      src={details?.preview ? details?.preview : profileImage}
                      alt=""
                      className="signupquesImg rounded-full"
                    />
                  </div>
                  <div className="flex flex-row items-center  space-x-2 py-6">
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
                    <span className="shrink-0 signupQuesuploadImg">
                      Upload Profile picture
                    </span>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Next and Previous buttons */}
          <div className="flex flex-row justify-center space-x-4 mt-10 mb-10">
            <button
              className="flex flex-row items-center space-x-2 bg-white rounded-lg px-6 py-1 text-black "
              onClick={handlePrevious}
            >
              {leftArrow} Previous
            </button>

            {step < 5 && (
              <button
                className="flex flex-row items-center space-x-2 bg-white rounded-lg px-10 py-1 text-black "
                onClick={handleNext}
              >
                Next {rightArrowBlack}
              </button>
            )}

            {step === 5 && (
              <button
                className="flex flex-row items-center space-x-2 bg-white rounded-lg px-10 py-1 text-black "
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </main>

      <footer>
        <div className="flex items-center justify-center py-2">
          <p>
            By logging In, you accept The Wee Doc’s <br />
            <b>Terms & Conditions</b> and{" "}
            <b>
              <Link to="/privacypolicy">Privacy Policy</Link>
            </b>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default SignupQuestions;
