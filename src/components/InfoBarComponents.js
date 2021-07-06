import React from "react";
import {useState} from "react"
import {Link} from "react-router-dom";

const NavBar = () => {
	const element = (
		<nav id="navbar" className="flex items-center justify-between py-3 px-5 sticky border-b border-gray-300">
			<button onclick="sidebarToggle()"
				className="btn-actionbar text-2xl mdi mdi-menu inline-block md:hidden mr-3"></button>

			<div className="flex items-center">
				<span className="mdi mdi-account-group-outline text-2xl text-blue-500 mr-4"></span>
				<h4 className="text-lg text-gray-900">群組</h4>
			</div>

			<div>
				<button className="mdi mdi-phone btn-actionbar mr-5"></button>
				<button id="infobar-btn" className="mdi mdi-information btn-actionbar text-blue-500" onclick="infobarToggle()"></button>
			</div>
		</nav>
	);
	return element;
}
const InfoBar = () => {
	const element = (
		<div id="infobar" class="custom-scroll-bar">
			<DefaultInfoBar/>
		</div>);
	return element;
}
const DefaultInfoBar = (props) => {
	const element = (
		<div class="absolute w-full">
			<InfoTitle/>
			<hr class="border-gray-300"/>
			<FunctionBox/>
		</div>
	);
	return element;
}
const InfoTitle = () => {
	const element = (
		<div class="text-center p-3">
			<span class="mdi mdi-account-group-outline text-blue-500 text-5xl"></span>
			<h4 class="text-gray-900 text-xl">群組</h4>
		</div>
	);
	return element;
}
const FunctionBox = (props) => {
	const element = (
		<div class="p-2">
			<button class="list-item" click="action='search'">
				<h4>搜尋對話</h4>
				<span class="mdi mdi-magnify text-gray-600 text-xl"></span>
			</button>
			<button class="list-item">
				<div class="text-left">
					<h4>通知</h4>
					<p class="text-sm text-gray-600">靜音</p>
				</div>
				<span class="mdi mdi-bell-off-outline text-gray-600 text-xl"></span>
			</button>
			<button class="list-item">
				<div class="text-left">
					<h4>照片、影片</h4>
				</div>
				<span class="mdi mdi-image-multiple text-gray-600 text-xl"></span>
			</button>
			<button class="list-item" click="action='leave'">
				<div class="text-left">
					<h4>退出群組</h4>
				</div>
				<span class="mdi mdi-logout text-red-500 text-xl"></span>
			</button>
		</div>
	);
	return element;
}




export {NavBar,InfoBar};
