import React, { useState, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Link,
} from "react-router-dom";
import './App.css';
import Login from './components/Login'
const App =()=>{ 
    return (        

        <div className='App'>
          <Login/>
        </div>
      
    );
  }

export default App

