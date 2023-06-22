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

function Markup() {
  return (
    <div>
        <BrowserRouter basename='/'>
           <Routes>
              <Route exact path='/' element={< HomePage />}/>
              <Route exact path='/video/:id/:name' element={< Indivialpage />}/>
              <Route exact path='/signup' element={<Signuppage/>}/>
              <Route exact path='/login' element={<Loginpage/>}/>
           </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Markup