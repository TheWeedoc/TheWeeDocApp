import React, { useState } from "react";
import "./Loginflow.css";
import { Form, Input, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { resetpassword } from "../../Api/Fetchclient";
import LogoImage from "../../Assests/Images/TheWeedoc.png";
import LogoImageMobile from "../../Assests/Images/LogoImageMobile.png";

function Resetpage() {
  const [formErrors, setFormErrors] = useState({});
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 20,
        color: "black",
      }}
      spin
    />
  );

  const onFinish = async (values) => {
    setLoad(true);
    let data = {
      email: values?.email,
    };
    try {
      const response = await resetpassword(data);
      console.log("Reset response", response);
      setLoad(false);
      if (response.detail === "Password reset email has been sent") {
        navigate("/reset_mail_sent");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setFormErrors({ email: "This email is not registered" });
      } else {
        console.log("Error:", error);
      }
      setLoad(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    const formErrors = {};
    errorInfo.errorFields.forEach((field) => {
      formErrors[field.name[0]] = field.errors[0];
    });
    setFormErrors(formErrors);
  };

  return (
    <div className="loginMainDiv">
      {/* <div className="log_leftside">
        <div className="text-container">
          <h2>Clumsycloverclowns</h2>
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
          <span>Reset Password</span>

          <div className="reset_desp">
            <span>
              Enter your registered email address and we’ll send you a link to
              reset your password
            </span>
          </div>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={
              {
                // span: 16,
              }
            }
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not a valid email!",
                },
                {
                  required: true,
                  message: "Please input your email",
                },
              ]}
              validateStatus={formErrors.email ? "error" : ""}
              help={formErrors.email ? formErrors.email : ""}
            >
              <Input
                placeholder="Enter your email"
                className="form_resetinputfields placeholder:text-white"
              />
            </Form.Item>

            <button type="submit" className="loginbtn">
              {load ? <Spin indicator={antIcon} /> : "Send Link"}
            </button>
          </Form>
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

export default Resetpage;
