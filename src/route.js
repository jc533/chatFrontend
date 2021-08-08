import {BrowserRouter as Router, Redirect, Link, Switch, HashRouter, Route} from "react-router-dom";
import "./stylesheet/style.css";

import {SingIn,SingUp,Main} from "./views";


export default function Routes(){
	return(
	<Router>
		<Switch>
			<Route path="/login">
				<SingIn/>
			</Route>
			<Route path="/register">
				<SingUp/>
			</Route>
			<Route path="/">
				<Main/>
			</Route>
		</Switch>
	</Router>);
};


