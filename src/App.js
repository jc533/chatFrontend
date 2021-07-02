import React from "react";
import {useState} from "react";
import Login from "./pages/login.js";
import Register from "./pages/register.js";
import Main from "./pages/main.js";
//import { Link } from "react-router"
import {BrowserRouter as Router, Redirect, Link, Switch, HashRouter, Route} from "react-router-dom";
import "./stylesheet/style.css";
//import "./App.css";



function App() {
  return (
	<Router>
	  <Switch>
		<Route path="/login">
    		<Login/>
	  	</Route>
		<Route path="/register">
    		<Register/>
	  	</Route>
	  	<Route exact path="/">
	  		<Main/>
	  	</Route>
	  </Switch>
	</Router>
  );
}

export default App;
