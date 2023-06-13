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

function Markup() {
  return (
    <div>
        <BrowserRouter basename='/'>
           <Routes>
              <Route exact path='/' element={< HomePage />}/>
              <Route exact path='/video/:id/:name' element={< Indivialpage />}/>

           </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Markup