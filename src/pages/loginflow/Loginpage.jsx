import react, { useState } from "react";
import "./Loginflow.css";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { getlogin } from "../../Api/Fetchclient";
import { useNavigate } from "react-router-dom";
function Loginpage() {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formErrors2, setFormErrors2] = useState({});

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
      username: values?.username,
      password: values?.password,
    };

    try {
      const response = await getlogin(data);
      console.log("Login response", response);
      setLoad(false);
      if (response?.status === 200) {
        localStorage.setItem("token", response?.data?.token);
        navigate("/");
        console.log("Response", response);
      }
      if (response?.status === 404) {
        const errorData = response.data;
        setFormErrors(errorData);
      }
      if (response?.status === 401) {
        setFormErrors2(response.data);
      }
    } catch (error) {
      if (error && error.data) {
        const errorData = error.data;
        setFormErrors(errorData);
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleUsernameFocus = () => {
    setFormErrors({});
  };

  const handlePasswordFocus = () => {
    setFormErrors2({});
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
          <span>Log In</span>
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
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              validateStatus={formErrors.error ? "error" : ""}
              help={formErrors.error}
            >
              <Input
                placeholder="Username *"
                className="form_inputfields"
                onFocus={handleUsernameFocus}
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
              validateStatus={formErrors2.error ? "error" : ""}
              help={formErrors2.error}
            >
              <Input.Password
                placeholder="Password *"
                onFocus={handlePasswordFocus}
              />
            </Form.Item>

            <div className="forgetpswrd">
              <Link to="/reset_password">Forgot Password?</Link>
            </div>
            <button className="loginbtn">
              {load ? <Spin indicator={antIcon} /> : "Login"}
            </button>
          </Form>
          <p className="newuser_txt">
            New User? <Link to="/signup">Signup</Link>
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
export default Loginpage;
