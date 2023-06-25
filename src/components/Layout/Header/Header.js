import React,{useEffect,useState} from 'react'
import  "./Header.css"
import Logo from "../../../Assests/Images/theweedocLogo.png"
import { notificationicon,uploadicon,SearchIcon } from '../../../Assests/Svg/Commonsvg';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="headerDiv">
      <nav className="HeadermainDiv">
        <div>
            <Link to="/"> <img src={Logo} className="Logoclass"  alt='Theweedoc'/></Link>
        </div>
        <div className="HeaderOptionsDiv">
          <div><Link to="/search">{SearchIcon}</Link></div>
           <div>{uploadicon}</div>
           <div className="notifyDiv">
            <div>{notificationicon}</div>
            <div className="notifitionCount">2</div>
           </div>
           <div>
           <Link to="/login" style={{textDecoration:"none"}}><button className="Loginbtn">Login</button></Link> 
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header