import React,{useEffect,useState} from 'react'
import {Popover} from 'antd';
import  "./Header.css"
import Logo from "../../../Assests/Images/theweedocLogo.png"
import { notificationicon,uploadicon,SearchIcon,Profileicon } from '../../../Assests/Svg/Commonsvg';
import { Link } from 'react-router-dom';
import Notification from '../../Notification/Notification';
import useIsLoggedIn from '../../../Hooks/useIsLoggedIn';

function Header() {
  const userpro = "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"
  const profile = "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
  const isLoggedIn = useIsLoggedIn();

  const  profiledropdown = ()=>{
          return(
            <div className='profiledrpdwnDiv'>
                <div className=''>

                </div>
            </div>
          )
  }
  return (
    <div className="headerDiv">
      <nav className="HeadermainDiv">
        <div>
            <Link to="/"> <img src={Logo} className="Logoclass"  alt='Theweedoc'/></Link>
        </div>
        <div className="HeaderOptionsDiv">
          <div><Link to="/search">{SearchIcon}</Link></div>
           <div><Link to="/upload">{uploadicon}</Link></div>
           <div className="notifyDiv">
            <div>
           <Popover placement="bottom"  content={<Notification/>} trigger="click">
              {notificationicon}
            </Popover>
              </div>
            <div className="notifitionCount">2</div>
           </div>
           <Popover placement="bottom"  content={<Notification/>} trigger="click">
           <img src={profile} alt="Profile Picture" className="profilePictureDiv" />  
            </Popover>
           {/* {isLoggedIn ? (
            <div >
              <img src={userpro} alt="Profile Picture" className="profilePictureDiv" />
            </div>
          ) : (
            <div>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button className="Loginbtn">Login</button>
              </Link>
            </div>
          )} */}



        </div>
      </nav>
    </div>
  )
}

export default Header