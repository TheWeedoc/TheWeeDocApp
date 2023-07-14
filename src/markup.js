import React,{useState,useEffect} from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
import HomePage from './pages/Homepage/HomePage';
import Indivialpage from './pages/IndivialVideopage/Indivialpage';
import Signuppage from './pages/loginflow/signuppage';
import Loginpage from './pages/loginflow/Loginpage';
import Searchpage from './pages/searchpage/Searchpage';
import Resetpage from './pages/loginflow/Resetpage';
import NewPasswordPage from './pages/loginflow/NewPasswordPage';
import Uploadpage from './pages/UploadPage/Uploadpage';
import VerifyPage from './pages/loginflow/VerifyPage';
import ResetChange from './pages/loginflow/ResetChange';
import Myprofile from './pages/Myprofile/Myprofile';
import Editprofile from './pages/Myprofile/Editprofile';
function Markup() {
  return (
    <div>
        <BrowserRouter basename='/'>
           <Routes>
              <Route exact path='/' element={< HomePage />}/>
              <Route exact path='/video/:id/:name' element={< Indivialpage />}/>
              <Route exact path='/search' element={<Searchpage/>} />
              <Route exact path='/upload' element={<Uploadpage/>} />
              <Route exact path='/myprofile' element={<Myprofile/>} />
              <Route exact path='/edit_profile' element={<Editprofile/>} />

{/* <<<<=====================Login Auth Flow========================>>> */}
              <Route exact path='/signup' element={<Signuppage/>}/>
              <Route exact path='/login' element={<Loginpage/>}/>
              <Route exact path='/reset_password' element={<Resetpage/>} />
              <Route exact path='/change_password' element={<NewPasswordPage/>} />
              <Route exact path='/Verify_mail' element={<VerifyPage/>} />
              <Route exact path='/reset_mail_sent' element={<ResetChange/>} />
{/* <<<<=====================Login Auth Flow========================>>> */}



           </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Markup