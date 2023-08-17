import React from "react";
import "./Loginflow.css";
import { Form, Input, notification } from "antd";
import { Link } from "react-router-dom";
import { signup } from "../../Api/Fetchclient";
function VerifyPage() {
  return (
    <div className="loginMainDiv">
      {/* <div className="log_leftside">
        <div class="text-container">
          <h2>Clumsycloverclowns </h2>
          <h1>Short Film Platform</h1>
        </div>
      </div> */}
      <div className="log_rightside">
        {/* <div className="WeeDocTxt_div">
                <img src={WeeDoc} alt="TheWeeDoc" />
                <h1>TheWeedoc</h1>
            </div> */}

        <div className="form_Div pad_form">
          <span>Signup Verification</span>
          <div className="reset_desp">
            <span>
              Thank you for signing up to TheWeedoc ! Please check your email
              for a verification link. Click the link to complete your signup
              process.
            </span>
          </div>

          <button className="loginbtn">Go To Mail</button>
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
