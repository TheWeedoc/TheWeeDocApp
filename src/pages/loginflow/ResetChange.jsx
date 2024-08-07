import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../Assests/Images/TheWeedoc.png";
import LogoImageMobile from "../../Assests/Images/LogoImageMobile.png";
import "./Loginflow.css";

function ResetChange() {
  return (
    <div className="loginMainDiv">
      {/* <div className="log_leftside">
        <div class="text-container">
          <h2>Clumsycloverclowns </h2>
          <h1>Short Film Platform</h1>
        </div>
      </div> */}
      <div className="log_rightside">
        <div className=" hidden md:block flex items-center gap-20 WeeDocTxt_div">
          <h1>
            <Link to="/" className="flex flex-row items-center">
              {" "}
              <img
                src={LogoImage}
                alt="TheWeeDocLogo"
                 className="logo-auth-page"
              />{" "}
            </Link>
          </h1>
        </div>

        <div className="flex items-center gap-20 WeeDocTxt_div md:hidden ">
          <h1>
            <Link to="/" className="flex flex-row items-center">
              {" "}
              <img
                src={LogoImage}
                alt="TheWeeDocLogo"
                 className="logo-auth-page"
              />{" "}
            </Link>
          </h1>
        </div>

        <div className="form_Div pad_form">
          <span>Reset Password Email Sent</span>
          <div className="reset_desp">
            <span>
              You will be receiving an email soon allowing to rest your
              password. Please make sure to check your spam if not received.
            </span>
          </div>
          <a
            target="_blank"
            href="https://mail.google.com/mail/u/0/#inbox"
            rel="noopener noreferrer"
          >
            <button type="submit" className="loginbtn">
              check mail
            </button>
          </a>
        </div>

        <div className="log_btm-sec">
          <p>
            By logging In, you accept TheWeedoc’s <br />
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

export default ResetChange;
