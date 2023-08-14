import React, { useState } from "react";
import "./Loginflow.css";
import { Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../Api/Fetchclient";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
function Signuppage() {
  const [form] = Form.useForm();
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
    console.log("Success:", values);
    let data = {
      username: values?.username,
      email: values?.email,
      phone_number: "",
      password: values?.password,
      password2: values?.password,
    };

    const response = await signup(data);
    setLoad(false);
    if (response?.status === 201) {
      navigate("/Verify_mail");
      form.resetFields();
    }
    if (response?.status === 400) {
      const errorData = response.data;
      setFormErrors(errorData);
    }
  };

  const onFinishFailed = (errorInfo) => {
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
          <span>Signup</span>
          <Form
            name="basic"
            form={form}
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
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              validateStatus={formErrors.username ? "error" : ""}
              help={formErrors.username}
            >
              <Input
                placeholder="Enter your username"
                className="form_inputfields"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not a valid email!",
                },
                {
                  required: true,
                  message: "Please input your email or phone number!",
                },
              ]}
              validateStatus={formErrors.email ? "error" : ""}
              help={formErrors.email}
            >
              <Input
                placeholder="Enter your email or phone number"
                className="form_inputfields"
              />
            </Form.Item>

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
              <Input.Password placeholder="Password *" />
            </Form.Item>

            <button className="loginbtn">
              {load ? <Spin indicator={antIcon} /> : "Signup"}
            </button>
          </Form>
          <p className="newuser_txt">
            Registered User? <Link to="/login">Login</Link>
          </p>
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

export default Signuppage;
