import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import ClickAwayListener from 'react-click-away-listener';


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

export {FriendMenu,AccountMenu,FriendGroupList}
