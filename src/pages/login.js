import React from "react";
import {useState} from "react"
import {Link} from "react-router-dom";
import {LoginForm} from "../components/FormComponents.js";

const Login = () => {
	const element = (<header className="min-h-screen w-full flex justify-center items-center bg-gray-400 p-5">
		<div className="flex flex-wrap bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-2xl">

			<div className="w-full h-8 md:w-1/2 md:h-auto flex bg-board relative">

			</div>

			<div className="w-full flex flex-col md:w-1/2 p-10">
				<h1 className="text-3xl font-bold text-center">登入</h1>
				<div className="mt-5">
					<LoginForm/>
				</div>
			</div>
		</div>
	</header>)
	return element;
}



export default Login;
