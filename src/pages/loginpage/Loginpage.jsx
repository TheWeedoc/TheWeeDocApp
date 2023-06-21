import react from "react";
import "./Loginflow.css"
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from "react-router-dom";
import WeeDoc from "../../Assests/Images/theweedocLogo.png"
function Loginpage() {
    const onFinish = (values) => {
    console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };
    return(
        <div className="loginMainDiv">
        <div className="log_leftside">

        </div>
        <div className="log_rightside">
                <div className="WeeDocTxt_div">
                    <img src={WeeDoc} alt="TheWeeDoc" />
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
                        message: 'Please input your username!',
                        },
                    ]}
                    >
                    <Input placeholder="Enter your email" className="form_inputfields"/>
                    </Form.Item>

                    <Form.Item
                   
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                    >
                    <Input.Password  placeholder="Password *"/>
                    </Form.Item>
                    
                    <div className="forgetpswrd">
                        <Link to="/">Forgot Password?</Link>
                    </div>
                    {/* <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    >
                    <Checkbox>Remember me</Checkbox>
                    </Form.Item> */}

                  
                    <button className="loginbtn">
                      Login
                    </button>
                    
                </Form>
                </div>

                <div className="log_btm-sec">
                        <p>
                        By logging In, you accept The Wee Doc’s <br/><b>Terms & Conditions</b> and <b>Privacy Policy</b>
                        </p>
                </div>
        </div>
    </div>
    )
}
export default Loginpage;