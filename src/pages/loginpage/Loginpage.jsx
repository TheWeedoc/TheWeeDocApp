import react from "react";
import "./Loginflow.css"
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from "react-router-dom";
import WeeDoc from "../../Assests/Images/theweedocLogo.png"
import { getlogin } from "../../Api/Fetchclient";
function Loginpage() {

    const onFinish = async(values) => {
        console.log('Success:', values);
        let data = {
            "username":values?.username,
            "password":values?.password,
        }
            const respon = await getlogin(data).then((resp)=>{
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
                    <Input placeholder="Username *" className="form_inputfields"/>
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

                  
                    <button className="loginbtn" onClick={onFinish}>
                      Login
                    </button>
                    
                </Form>
                <p className="newuser_txt">New User? <Link to="/signup">Signup</Link></p>
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