import React,{useEffect,useState} from 'react'
import  "./Header.css"
import Logo from "../../../Assests/Images/theweedocLogo.png"
import { notificationicon,uploadicon,SearchIcon } from '../../../Assests/Svg/Commonsvg';
function Header() {
  return (
    <div className="headerDiv">
      <nav className="HeadermainDiv">
        <div>
             <img src={Logo} className="Logoclass"  alt='Theweedoc'/>
        </div>
        <div className="HeaderOptionsDiv">
          <div>{SearchIcon}</div>
           <div>{uploadicon}</div>
           <div className="notifyDiv">
            <div>{notificationicon}</div>
            <div className="notifitionCount">2</div>
           </div>
           <div>
            <button className="Loginbtn">Login</button> 
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header