import React from "react";
import {useState} from "react"
import {Link,Redirect} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {login,logout} from "../../../reducers/userSlice.js";

const sendLogin = async (action,data,dispatch) => {
	console.log("hi")
	try{
		let res = await axios.post(`http://localhost:8080/${action}`,data)
		console.log(res.data)
		let userData = res.data.data
		if(res.data.code!=200){
			console.log("jizzzzzz")
			console.error(res.data.con)
		}else{
			window.sessionStorage.setItem("name", data.name);
			dispatch(login({name:data.name,rooms:userData.rooms}));
		}

	}catch(e){
		console.error(e)
	}

}
const LoginForm = () => {
	const [name,setName] = React.useState("");
	const [password,setPassword] = React.useState("");
	const propSetName = (x) => setName(x);
	const propSetPass = (x) => setPassword(x);
	const dispatch = useDispatch();
	const send = (e) => {
		e.preventDefault();
		setName("");
		setPassword("");
		let data = {"name":name,"pwd":password}
		sendLogin("login",data,dispatch);
	}
	const typeElement = (
		<div>
			<label className="w-full my-4 custom-checkbox flex items-center">
				<input type="checkbox" name="" id=""/>
				<span className="custom-checkbox-icon"></span>
				<p className="inline ml-4">記住帳號密碼</p>
			</label>
			<div className="flex justify-between items-center">
				<button type="submit" className="btn btn-primary">登入</button>
				<div>
					<Link to="/register">註冊</Link>
				</div>
			</div>
		</div>
	)

	const element = (
		<AccountForm type="login"
			name={name} setName={propSetName}
			setPassword={propSetPass} password={password}
			send={send}
			typeElement={typeElement}/>);
	return element;
}

const AccountForm = (props) => {
	const element = (
		<form onSubmit={props.send} method="post" id={props.type}>
			<div className="w-full my-4">
				<label htmlFor="account" className="inline-block mb-2 text-gray-600"><span className="mdi mdi-account-circle"></span> 帳號</label>
				<input id="account" type="text" onChange={(e)=>{props.setName(e.target.value)}} value={props.name} className="custom-input w-full" name="user" autoFocus/>
			</div>

			<div className="w-full my-4">
				<label htmlFor="password" className="inline-block mb-2 text-gray-600"><span className="mdi mdi-key"></span>
					密碼</label>
				<input id="password" type="password" onChange={(e)=>{props.setPassword(e.target.value)}} value={props.password}  className="custom-input w-full" name="passwd"/>
			</div>
			{props.typeElement}
			<div id="err_msg"></div>
		</form>
	)
	return element;
}
export default LoginForm;
