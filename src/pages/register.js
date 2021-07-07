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

export default Register;
