import react from "react"
import "./Loginflow.css"
import WeeDoc from "../../Assests/Images/theweedocLogo.png"
function Signuppage() {
    return(
        <div className="loginMainDiv">
            <div className="log_leftside">

            </div>
            <div className="log_rightside">
                    <div className="WeeDocTxt_div">
                        <img src={WeeDoc} alt="TheWeeDoc" />
                        <h2>TheWeedoc</h2>
                    </div>
            </div>
        </div>
    )
}

export default Signuppage;