import react,{useState} from "react";
import "./Loginflow.css"
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from "react-router-dom";
import WeeDoc from "../../Assests/Images/theweedocLogo.png"
import { getlogin } from "../../Api/Fetchclient";
function Loginpage() {
    
    const [formErrors, setFormErrors] = useState({});
    const [formErrors2,setFormErrors2] = useState({})

    const onFinish = async (values) => {
        console.log('Success:', values);
        let data = {
          "username": values?.username,
          "password": values?.password,
        };
      
        try {
          const response = await getlogin(data);
          console.log("Login response", response);
          if (response?.status===404) {
            const errorData = response.data;
            console.log("Error:", errorData.error);
             setFormErrors(errorData);
          }
          if (response?.status===401) {
            setFormErrors2(response.data)
          }
        } catch (error) {
          if (error && error.data) {
            const errorData = error.data;
            console.log("Error:", errorData.error);
             setFormErrors(errorData);
          }
        }
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
                    validateStatus={formErrors.error ? 'error' : ''}
                    help={formErrors.error}
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
                    validateStatus={formErrors2.error ? 'error' : ''}
                    help={formErrors2.error}
                    >
                    <Input.Password  placeholder="Password *"/>
                    </Form.Item>
                    
                    <div className="forgetpswrd">
                        <Link to="/reset_password">Forgot Password?</Link>
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