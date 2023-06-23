import React from "react"
import "./Loginflow.css"
import WeeDoc from "../../Assests/Images/theweedocLogo.png"
import { Form, Input } from 'antd';
import { Link } from "react-router-dom";
import { signup } from "../../Api/Fetchclient";

function Signuppage() {

    const onFinish = async(values) => {
        console.log('Success:', values);
        let data = {
            "username":values?.username,
            "email":values?.email,
            "phone_number":9876656544,
            "password":values?.password,
            "password2":values?.password,
        }
            const respon = await signup(data).then((resp)=>{
                console.log("Signup response",resp);
            })
        
    };
        const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        };
    return(
        <div className="loginMainDiv">
        <div className="log_leftside">
        <div class="text-container">
            <h2>Clumsycloverclowns </h2>
            <h1>Short Film Platform</h1>
        </div>
        </div>
        <div className="log_rightside">
                <div className="WeeDocTxt_div">
                    {/* <img src={WeeDoc} alt="TheWeeDoc" /> */}
                    <h1>TheWeedoc</h1>
                </div>

                <div className="form_Div">
                   <span>Signup</span>
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
                    <Input placeholder="Enter your username" className="form_inputfields"/>
                    </Form.Item>

                    <Form.Item
                    
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                          },
                        {
                        required: true,
                        message: 'Please input your email or phone number!',
                        },
                    ]}
                    >
                    <Input placeholder="Enter your email or phone number" className="form_inputfields"/>
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

                  
                    <button className="loginbtn" onClick={onFinish}>
                      Login
                    </button>
                    
                </Form>
                <p className="newuser_txt">Registered User? <Link to="/login">Login</Link></p>
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

export default Signuppage;