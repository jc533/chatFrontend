import React from "react";
import { Switch, Redirect } from "react-router-dom";
import {BrowserRouter as Router, Redirect, Link, Switch, HashRouter, Route} from "react-router-dom";
import "./stylesheet/style.css";


export default Routes = () => (
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

)
