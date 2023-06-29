import React,{useState,useEffect} from 'react'
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
    Link,
    useLocation,
    useHistory,
    Router,
    Routes,
  } from "react-router-dom";
import HomePage from './pages/Homepage/HomePage';
import Indivialpage from './pages/IndivialVideopage/Indivialpage';
import Signuppage from './pages/loginpage/signuppage';
import Loginpage from './pages/loginpage/Loginpage';
import Searchpage from './pages/searchpage/Searchpage';
import Resetpage from './pages/loginpage/Resetpage';
import NewPasswordPage from './pages/loginpage/NewPasswordPage';
function Markup() {
  return (
    <div>
        <BrowserRouter basename='/'>
           <Routes>
              <Route exact path='/' element={< HomePage />}/>
              <Route exact path='/video/:id/:name' element={< Indivialpage />}/>
              <Route exact path='/signup' element={<Signuppage/>}/>
              <Route exact path='/login' element={<Loginpage/>}/>
              <Route exact path='/search' element={<Searchpage/>} />
              <Route exact path='/reset_password' element={<Resetpage/>} />
              <Route exact path='/change_password' element={<NewPasswordPage/>} />

           </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Markup