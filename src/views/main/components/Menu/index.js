import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import ClickAwayListener from 'react-click-away-listener';

const DropDownMenu = (props) => {
	const handleChange = (x) => props.setOpen(!props.open);
	const element = (
		<Transition show={props.open}
			enter="transition ease-out duration-200"
			enterFrom="opacity-0 transform -translate-y-4"
			enterTo="opacity-100 transform translate-y-0"
			leave="transition ease-out duration-200"
			leaveFrom="opacity-100 transform translate-y-0"
			leaveTo="opacity-0 transform -translate-y-4"
		>
			<div className="dropdown" onClick={handleChange}>
				{props.children}
			</div>
		</Transition>
	);
	return element;
}
const FriendMenu = () => {
	const [isOpen, setOpen] = useState(false);
	const handleChange = () => { setOpen(!isOpen) };

	const element = (
		<ClickAwayListener onClickAway={()=>{setOpen(false)}}>
			<div className="relative">
				<button className="btn-icon mdi mdi-dots-vertical"
					onClick={handleChange}></button>
				<DropDownMenu open={isOpen} setOpen={(x)=>{setOpen(x)}}>
					<Link to="/settings" className="dropdown-item" target="_blank">
						<span className="mdi mdi-message-processing"></span>
						聊天
					</Link>
					<a className="dropdown-item">
						<span className="mdi mdi-delete"></span>
						刪除
					</a>
				</DropDownMenu>
			</div>
		</ClickAwayListener>
	);
	return element;
}
const AccountMenu = (props) => {
	const [isOpen, setOpen] = useState(false);
	const handleChange = () => { setOpen(!isOpen) };

	const element = (
		<ClickAwayListener onClickAway={()=>{setOpen(false)}}>

			<div className="relative">
				<button className="btn-actionbar flex items-center" onClick={handleChange}>
					<span className="mdi mdi-account-circle text-blue-500 text-2xl"></span>
					<span className="mdi mdi-menu-down text-gray-600"></span>
				</button>

				<DropDownMenu open={isOpen} setOpen={(x)=>{setOpen(x)}}>
					<Link to="/settings" className="dropdown-item" target="_blank">
						<span className="mdi mdi-settings"></span>
						設定
					</Link>
					<a href="" className="dropdown-item">
						<span className="mdi mdi-logout"></span>
						登出
					</a>
				</DropDownMenu>
			</div>
		</ClickAwayListener>
	);
	return element;
}
const FriendGroupList = () => {
	const friends = ["a","b"];
	const element = friends.map((text,id)=>
		<label key={id} className="list-item custom-checkbox">
			<div className="flex items-center">
				<span className="mdi mdi-account text-xl text-gray-600 mr-4"></span>
				<p className="text-gray-900">{text}</p>
			</div>
			<input type="checkbox" name="" id=""/>
			<span className="custom-checkbox-icon"></span>
		</label>


	);
	return element;
}

export {DropDownMenu,FriendMenu,AccountMenu,FriendGroupList}
