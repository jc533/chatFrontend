import React from "react";
import {useState} from "react"
import {Link,Redirect} from "react-router-dom";
import {FriendGroupList} from "./MenuComponents.js";
import axios from "axios";
import {useDispatch} from "react-redux";
import {login,logout} from "../reducers/userSlice.js";

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
const RegisterForm = () => {
	const [name,setName] = React.useState("");
	const [password,setPassword] = React.useState("");
	const [confirmPass,setConfirm] = React.useState("");
	const [errMsg,setErrMsg] = React.useState("");
	const propSetName = (x) => setName(x);
	const propSetPass = (x) => setPassword(x);
	const dispatch = useDispatch();
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
		sendLogin("register",data,dispatch);


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
const AddFriendsForm = (props) => {
	const addFriend = (e) => {
		e.preventDefault();
		props.setAction('none');
	}
	const element = (
		<form action="" onSubmit={addFriend} method="post" className="p-3">
			<p className="text-gray-600 mb-2">請在下方輸入你要新增的帳號。</p>
			<input type="text" className="custom-input w-full" x-ref="addFriendInput" required />
			<div className="mt-4 grid grid-cols-2 gap-4">
				<button className="btn btn-secondary" type="reset"
					onClick={(e) => { e.preventDefault(); props.setAction('none') }}>取消</button>
				<button type="submit" className="btn btn-primary">新增</button>
			</div>
		</form>
	)
	return element
}
const AddGroupForm = (props) => {
	const addGroup = (e) => {
		e.preventDefault();
		props.setAction("none")
	}

	const element = (
		<form action="" onSubmit={addGroup} method="post" className="p-3">
			<FriendGroupList/>
			<div className="mt-4 grid grid-cols-2 gap-4">
				<button className="btn btn-secondary" type="reset"
					onClick={(e)=>{e.preventDefault();props.setAction('none')}}>取消</button>
				<button type="submit" className="btn btn-primary">建立</button>
			</div>
		</form>
	);
	return element;
}
const SearchForm = (props) => {
	const element = (
		<form action="" method="post" class="mt-4">
			<input type="text" class="custom-input w-full"/>

			<div class="mt-4 grid grid-cols-2 gap-4">
				<button class="btn btn-secondary" type="reset"
					onClick={(e)=>{e.preventDefault();props.setAction("none")}}>取消</button>
				<button type="submit" class="btn btn-primary">搜尋</button>
			</div>
		</form>
	);
	return element;
}
const InfoAddFriendForm = (props) => {
	const element = (
		<form action="" class="my-2">
			<FriendGroupList/>
			<div class="mt-4 grid grid-cols-2 gap-4">
				<button class="btn btn-secondary" type="reset"
					onClick={()=>props.setAction('none')}>取消</button>
				<button type="submit" class="btn btn-primary">新增</button>
			</div>
		</form>
	);
	return element;
}

export {LoginForm,RegisterForm,AddFriendsForm,AddGroupForm,SearchForm,InfoAddFriendForm};
