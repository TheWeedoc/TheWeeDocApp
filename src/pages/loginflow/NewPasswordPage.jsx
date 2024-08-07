import React, { useState } from "react";
import "./Loginflow.css";

import { Form, Input } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resetUpdatePassword } from "../../Api/Fetchclient";
import LogoImage from "../../Assests/Images/TheWeedoc.png";
import LogoImageMobile from "../../Assests/Images/LogoImageMobile.png";

function NewPasswordPage() {
  const [formErrors, setFormErrors] = useState({});
  const [apiErr, setAPiErr] = useState("");
  const [apiSuccess, setApiSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const uid = searchParams.get("uid");
  const token = searchParams.get("token");

  const onFinish = async (values) => {
    console.log("Success:", values);
    if (values.password === values.confirmpassword) {
      let data = {
        password: values?.password,
        uid: uid,
        token: token,
      };

      try {
        const response = await resetUpdatePassword(data);

        if (response?.status === 200) {
          console.log("Signup response", response);
          setApiSuccess("Successfully Updated, Login to continue");
          navigate("/login");
        }
        if (response?.status === 400) {
          const errorData = response.data;
          console.log("Test", response);
          setFormErrors(errorData);
          if (response.data.detail) setAPiErr(response.data.detail);
        }
      } catch (error) {
        const errorData = error.response.data;
        setFormErrors(errorData);
        if (error.response.data.detail) setAPiErr(error.response.data.detail);
      }
    } else {
      setAPiErr("Password and Confirm password are not matching");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setFormErrors(
      errorInfo.errorFields.reduce((errors, item) => {
        errors[item.name[0]] = item.errors[0];
        return errors;
      }, {})
    );
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

        <div className="form_Div">
          <span>Set New Password</span>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
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
            <div className="reset_desp">
              <span>Password should have at least 8 characters</span>
            </div>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              validateStatus={formErrors.password ? "error" : ""}
              help={formErrors.password}
            >
              <Input.Password placeholder="Enter Your New Password" />
            </Form.Item>
            <Form.Item
              name="confirmpassword"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              validateStatus={formErrors.password ? "error" : ""}
              help={formErrors.password}
            >
              <Input.Password placeholder="Confrim Password" />
            </Form.Item>
            <div>
              {apiSuccess !== "" && (
                <h4 className="text-green-600 text-center font-notosans text-lg">
                  {apiSuccess}
                </h4>
              )}

              {apiErr !== "" && (
                <h4 className="text-red-600 text-center font-notosans text-lg">
                  {apiErr}
                </h4>
              )}
            </div>

            <button className="loginbtn" onClick={onFinish}>
              Confirm
            </button>
          </Form>
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

export default NewPasswordPage;
