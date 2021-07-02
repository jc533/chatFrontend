import {React,useState} from "react";
import {Link} from "react-router-dom"

import {RegisterForm} from "../components/FormComponents.js";

const Register = () => {
	const element = (<header className="min-h-screen w-full flex justify-center items-center bg-gray-400 p-5">
		<div className="flex flex-wrap bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-2xl">

			<div className="w-full h-8 md:w-1/2 md:h-auto flex bg-board relative">
			</div>

			<div className="w-full md:w-1/2 flex flex-col p-10">
				<h1 className="text-3xl font-bold text-center">註冊</h1>
				<div className="mt-5">
					<RegisterForm />
				</div>
			</div>

		</div>
	</header>
	)
	return element;
}

const loginForm = ( <form action="/register" method="post" id="register">
	<div className="w-full my-4">
		<label htmlFor="account" className="inline-block mb-2 text-gray-600"><span
			className="mdi mdi-account-circle"></span> 帳號</label>
		<input id="account" type="text" className="custom-input w-full" name="user" autoFocus/>
	</div>

	<div className="w-full my-4">
		<label htmlFor="password" className="inline-block mb-2 text-gray-600"><span
			className="mdi mdi-key"></span>
			密碼</label>
		<input id="password" type="password" className="custom-input w-full" name="passwd"/>
	</div>

	<div className="w-full my-4">
		<label htmlFor="passwordagain" className="inline-block mb-2 text-gray-600"><span
			className="mdi mdi-key"></span>
			確認密碼</label>
		<input id="passwordagain" type="password" className="custom-input w-full" name="passwd_confirm"/>
	</div>
	<div className="flex justify-between items-center">
		<button type="submit" className="btn btn-primary">註冊</button>
		<div>
			<p className="mb-0 text-gray-500 inline mr-2">有帳號了?</p>
			<a href="/login">登入</a>
		</div>
		<div id="err_msg"></div>
	</div>
</form>);
export default Register;
