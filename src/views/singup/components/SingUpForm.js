import React from "react";
import {useState} from "react"
import {Link,Redirect} from "react-router-dom";
import {withRouter} from "react-router"
import axios from "axios";
import {useDispatch} from "react-redux";
import {sendLogin,sendRegister} from "actions";

/*const sendLogin = async (data,dispatch,history) => {
	console.log("jizz")
	try{
		let res = await axios.post(`http://localhost:8080/login`,data)
		let userData = res.data.data
		console.log(res.data)
		if(res.data.code!=200){
			console.log("jizzzzzz")
			console.error(res.data.con)
		}else{
			window.sessionStorage.setItem("name", data.name);
			dispatch(login({name:data.name,rooms:userData.rooms,friends:userData.friends}));
			//history.push("/")
		}

	}catch(e){
		console.error(e)
	}

}

const sendRegister = async (action,data,dispatch,history) => {
	console.log("hi")
	try{
		let res = await axios.post(`http://localhost:8080/${action}`,data)
		console.log(res.data)
		let userData = res.data.data
		if(res.data.code!=200){
			console.log("jizzzzzz")
			console.error(res.data.con)
		}else{
			sendLogin(data,dispatch,history)

		}

	}catch(e){
		console.error(e)
	}

}
*/
const RegisterForm = (props) => {
	const [name,setName] = React.useState("");
	const [password,setPassword] = React.useState("");
	const [confirmPass,setConfirm] = React.useState("");
	const [errMsg,setErrMsg] = React.useState("");
	const propSetName = (x) => setName(x);
	const propSetPass = (x) => setPassword(x);
	const dispatch = useDispatch();
	const {history} = props;
	const send = (e) => {
		e.preventDefault();
		setName("");
		setPassword("");
		setConfirm("");
		let data = {"name":name,"pwd":password,"passwd":confirmPass};
		/*if(confirmPass == password){
		}else{
			setErrMsg("請輸入正確密碼");
		}*/
		sendRegister("register",data,dispatch,history);


	}
	const typeElement = (
		<div>
			<div className="w-full my-4">
				<label htmlFor="passwordagain" className="inline-block mb-2 text-gray-600"><span className="mdi mdi-key"></span>
					確認密碼</label>
				<input id="passwordagain" type="password" className="custom-input w-full" name="passwd_confirm" value={confirmPass} onChange={(e)=>{setConfirm(e.target.value)}}/>
			</div>
			<div className="flex justify-between items-center">
				<button type="submit" className="btn btn-primary">註冊</button>
				<div>
					<p className="mb-0 text-gray-500 inline mr-2">有帳號了?</p>
					<Link to="/login">登入</Link>
				</div>
				<div id="err_msg">{errMsg}</div>
			</div>
		</div>
	)
	const element = (<AccountForm type="register" name={name} setName={propSetName} setPassword={propSetPass} password={password} send={send} typeElement={typeElement}/>);
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

export default withRouter(RegisterForm);
