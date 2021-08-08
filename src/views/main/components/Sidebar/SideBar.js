import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import Tabs from "./Tabs";
import {AccountMenu} from "./Menus.js";
const SideBar = (props) => {
	const element = (
		<aside id="sidebar" className={`h-screen sidebar overflow-y-scroll custom-scroll-bar ${props.active ? "sidebar-active" : "sidebar-hide"}`}>
			<div className="sticky bg-white md:bg-gray-200 p-4">
				<CloseButton active={props.active} setActive={props.setActive} />
				<Header />
			</div>
			<Tabs />
		</aside>
	);
	return element;
}

const CloseButton = (props) => {
	const sidebarToggle = ()=>props.setActive(false);
	const element = (
		<div className="mb-5 block md:hidden">
			<button onClick={sidebarToggle}
				className="btn-actionbar mdi mdi-close text-2xl mr-3 inline md:hidden"></button>
		</div>

	);
	return element;
};


const Header = () => {
	const element = (
		<div className="flex items-center justify-between w-full">
			<h1 className="text-gray-900 text-2xl font-bold">聊天室</h1>
			<AccountMenu/>
		</div>
	);
	return element;
}




export default SideBar;
