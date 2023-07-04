import react,{useState} from "react";
import "./Loginflow.css"
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from "react-router-dom";
import WeeDoc from "../../Assests/Images/theweedocLogo.png"
import { getlogin, resetpassword } from "../../Api/Fetchclient";

function Resetpage() {
    const [formErrors, setFormErrors] = useState({});

    const onFinish = async (values) => {
        console.log('Success:', values);
        let data = {
          "email": values?.email,
        };
      
        try {
          const response = await resetpassword(data);
          console.log("Login response", response);
          if (response?.status===404) {
            const errorData = response.data;
            console.log("Error:", errorData.error);
             setFormErrors(errorData);
          }
        }catch (error) {
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

                <div className="form_Div pad_form">
                   <span>Reset Password</span>

                 <div className="reset_desp">
                        <span>Enter your registered email address and we’ll send you a link to reset your password </span>
                </div>
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
                    name="email"
                    rules={[
                        {
                        type: 'email',
                        message: 'The input is not a valid email!',
                        },
                        {
                        required: true,
                        message: 'Please input your email or phone number!',
                        },
                    ]}
                    validateStatus={formErrors.detail ? 'error' : ''}
                    help={"This email id not registered"}
                    >
                    <Input placeholder="Enter your Email *" className="form_inputfields reset_input"/>
                    </Form.Item>
  

                    <button className="loginbtn" onClick={onFinish}>
                    Send Link
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
export default Resetpage