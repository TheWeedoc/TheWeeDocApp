import React, { useState } from "react";
import "./Loginflow.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { verifyOtp } from "../../store/Home/authReducer";
import LogoImage from "../../Assests/Images/theweedocLogo.png";

function VerifyPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const { isLoading } = useSelector((state) => state.auth);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color: "black",
      }}
      spin
    />
  );

  const inputRefs = [];

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    if (value === "" && index > 0) {
      // Automatically move focus to the previous input
      inputRefs[index - 1].focus();
    } else if (value !== "" && index < otp.length - 1) {
      // Automatically move focus to the next input
      inputRefs[index + 1].focus();
    }

    setOtp(newOtp);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      e.preventDefault();
      inputRefs[index - 1].focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      const otpText = otp.join("");
      dispatch(verifyOtp(otpText))
        .then((action) => {
          if (action.payload?.sucess) {
            navigate("/login");
          } else if (action.payload?.error) {
            setErrorMessage("OTP you have entered is wrong, please try again");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="loginMainDiv">
      {/* <div className="log_leftside">
        <div class="text-container">
          <h2>Clumsycloverclowns </h2>
          <h1>Short Film Platform</h1>
        </div>
      </div> */}
      <div className="log_rightside">
        <div className="WeeDocTxt_div">
          <h1>
            <Link to="/" className="flex flex-row items-center">
              {" "}
              <img
                src={LogoImage}
                alt="TheWeeDocLogo"
                className="w-20 h-20"
              />{" "}
              TheWeedoc
            </Link>
          </h1>
        </div>

        <div className="form_Div pad_form">
          <span>Signup Verification</span>
          <div className="reset_desp">
            <span>
              Thank you for signing up to TheWeedoc ! Please check your email
              and enter the verification Code.
            </span>
          </div>

          <div className="otp-container">
            {otp.map((value, index) => (
              <input
                key={index}
                ref={(ref) => (inputRefs[index] = ref)}
                type="text"
                maxLength={1}
                className="otp-input rounded-md"
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>
          {errorMessage !== "" && (
            <div className="text-red-600 capitalize text-center pt-2 text-md font-notosans">
              {errorMessage}
            </div>
          )}

          <button className="loginbtn" onClick={handleVerify}>
            {isLoading ? <Spin indicator={antIcon} /> : "Verify"}
          </button>
        </div>

        <div className="log_btm-sec">
          <p>
            By logging In, you accept The Wee Doc’s <br />
            <b>Terms & Conditions</b> and{" "}
            <b>
              <Link to="/privacypolicy">Privacy Policy</Link>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerifyPage;
