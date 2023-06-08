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

function Markup() {
  return (
    <div>
        <BrowserRouter basename='/'>
           <Routes>
              <Route exact path='/' element={< HomePage />}/>
           </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Markup