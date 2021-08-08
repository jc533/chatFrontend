import {BrowserRouter as Router, Redirect, Link, Switch, HashRouter, Route} from "react-router-dom";
import "./stylesheet/style.css";

import {SingIn,SingUp} from "./views";


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
		</Switch>
	</Router>);
};


