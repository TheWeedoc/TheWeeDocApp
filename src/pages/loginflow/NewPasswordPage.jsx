import React, { useState } from "react";
import "./Loginflow.css";
import WeeDoc from "../../Assests/Images/theweedocLogo.png";
import { Form, Input, notification } from "antd";
import { Link } from "react-router-dom";
import { signup } from "../../Api/Fetchclient";

function NewPasswordPage() {
  const [formErrors, setFormErrors] = useState({});

  const onFinish = async (values) => {
    console.log("Success:", values);
    let data = {
      username: values?.username,
      email: values?.email,
      phone_number: "",
      password: values?.password,
      password2: values?.password,
    };

    try {
      const response = await signup(data);
      if (response?.status === 200) {
        console.log("Signup response", response);
      }
      if (response?.status === 400) {
        const errorData = response.data;
        setFormErrors(errorData);
      }
    } catch (error) {}
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
        <div className="WeeDocTxt_div">
          {/* <img src={WeeDoc} alt="TheWeeDoc" /> */}
          <h1>TheWeedoc</h1>
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
              name="confirm password"
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

            <button className="loginbtn" onClick={onFinish}>
              Confirm
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

export default NewPasswordPage;
