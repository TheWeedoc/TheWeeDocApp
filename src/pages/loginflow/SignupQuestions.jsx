import React, { useState } from "react";
import Logo from "../../Assests/Images/theweedocLogo.png";
import { Link } from "react-router-dom";
import {
  cameraIcon,
  leftArrow,
  rightArrowBlack,
} from "../../Assests/Svg/Commonsvg";
import profileImage from "../../Assests/Images/ProfileImage.png";

function SignupQuestions() {
  const [details, setDetails] = useState({
    dateofbirth: "",
    gender: "",
    location: "",
    postalcode: "",
    image: "",
  });
  const [step, setStep] = useState(1);
  const currentYear = new Date().getFullYear();

  const handleGenderChange = (event) => {
    setDetails({ ...details, gender: event.target.value });
  };

  const handleLocationChange = (event) => {
    setDetails({ ...details, location: event.target.value });
  };

  const handlePostalCodeChange = (event) => {
    setDetails({ ...details, postalcode: event.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 4) setStep(step + 1);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <h1 className="ml-2 text-lg font-semibold">The Wee Doc</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center space-y-6 flex-grow px-3">
        <div className="w-full">
          <div className="w-full">
            <h1 className="text-center">
              Tell us a little about yourself to personalize the platform for
              you!
            </h1>

            <div className="flex justify-center w-full">
              <div className="flex flex-col py-4 w-full md:w-10/12 justify-center items-center">
                <div className="w-full space-y-3">
                  <h2>Step {step} of 4</h2>
                  <div className="bg-[#d9d9d9] w-full h-2 rounded-lg">
                    <div
                      className={`${
                        step > 0 && "w-1/4 h-full rounded-lg bg-[#e39724]"
                      }  `}
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
                  <h1 className="text-left">Date of Birth</h1>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="relative">
                    <select className="block w-16 p-2 rounded border border-[#bababa] text-[#fafbff] bg-transparent focus:border-white">
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
                    <select className="block w-24 p-2 rounded border border-[#bababa] bg-[#030606] text-[#fafbff] bg-transparent focus:border-white">
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
                          value={month}
                          className="bg-slate-900"
                        >
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative">
                    <select className="block w-20 p-2 rounded border border-[#bababa] text-[#fafbff] bg-transparent focus:border-white">
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
                  <h1 className="text-left">Gender</h1>
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
                      <span>Male</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={details.gender === "female"}
                        onChange={handleGenderChange}
                      />
                      <span>Female</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="gender"
                        value="neutral"
                        checked={details.gender === "neutral"}
                        onChange={handleGenderChange}
                      />
                      <span>Neutral</span>
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
                    <label className="text-sm font-semibold">Location</label>
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
                    <label className="text-sm font-semibold">Postal Code</label>
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

          {/* Step 4 Select Location and Postal code */}
          {step === 4 && (
            <div className="flex flex-col justify-center items-center  py-4">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div>
                  {" "}
                  <h1>Upload Your Profile Picture</h1>{" "}
                </div>
                <div>
                  <img src={profileImage} alt="" />
                </div>
                <div className="flex flex-row items-center  space-x-2 ">
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
                  <span className="shrink-0">Upload Profile picture</span>
                </div>
              </div>
            </div>
          )}

          {/* Next and Previous buttons */}
          <div className="flex flex-row justify-center space-x-4 mt-16">
            <button
              className="flex flex-row items-center space-x-2 bg-white rounded-lg px-6 py-1 text-black "
              onClick={handlePrevious}
            >
              {leftArrow} Previous
            </button>

            {step < 4 && (
              <button
                className="flex flex-row items-center space-x-2 bg-white rounded-lg px-10 py-1 text-black "
                onClick={handleNext}
              >
                Next {rightArrowBlack}
              </button>
            )}

            {step === 4 && (
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
