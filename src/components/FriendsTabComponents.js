import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import {AddFriendsForm,AddGroupForm} from "./FormComponents.js";
import {FriendMenu} from "./MenuComponents.js";
const ActionBar = (props) => {
	const element = (
		<div className="p-3 grid grid-cols-2 gap-4">
			<button className="w-full btn btn-primary" onClick={()=>props.setAction("addFriend")}>
				<span className="mdi mdi-account-plus text-2xl block"></span>
				新增朋友
			</button>
			<button className="w-full btn btn-primary" onClick={()=>props.setAction('createGroup')}>
				<span className="mdi mdi-account-multiple-plus text-2xl block"></span>
				建立群組
			</button>
		</div>
	);

	return element;
}
const CreateGroup = (props) => {
	const element = (
		<Transition show={props.action==='createGroup'}
			enter="transition ease-out duration-300"
			enterFrom="opacity-0 transform scale-75"
			enterTo="opacity-100"
			leave="transition ease-out duration-300"
			leaveFrom="opacity-100"
			leaveTo="opacity-0">
			<div className="py-3 absolute w-full">
				<div className="bg-white rounded-lg p-3 text-center">
					<span className="mdi mdi-account-multiple-plus-outline text-blue-500 text-4xl"></span>
					<p className="text-xl">建立群組</p>
					<AddGroupForm setAction={props.setAction}/>
				</div>
			</div>
		</Transition>
	)
	return element;
}
const AddFriends = (props) => {
	const element = (
		<div>
			<Transition show={props.action === 'addFriend'}
				enter="transition ease-out duration-300"
				enterFrom="opacity-0 transform scale-75" enterTo="opacity-100"
				leave="transition ease-out duration-300" leaveFrom="opacity-100"
				leaveTo="opacity-0">
				<div className="py-3 absolute w-full"
				>
					<div className="bg-white rounded-lg p-3 text-center">
						<span className="mdi mdi-account-plus-outline text-blue-500 text-4xl"></span>
						<p className="text-xl">新增朋友</p>
						<AddFriendsForm setAction={props.setAction}/>
					</div>
				</div>
			</Transition>
		</div>
	);
	return element;

}
const ActionNone = (props) => {
	const element = (
		<Transition show={props.action === 'none'}
			enter="transition ease-out duration-300"
			enterFrom="opacity-0" enterTo="opacity-100"
		>
			<ActionBar action={props.action} setAction={props.setAction}/>
			<FriendsList/>
		</Transition>


	)
	return element;
}
const FriendsList = () => {
	const friends = ["朋友","xxxx"];
	const element = friends.map((text,index)=>
		<div key={index} className="aside-item flex justify-between">
			<div className="flex items-center">
				<span className="mdi mdi-account text-gray-700 text-2xl mr-4"></span>
				<h4 className="text-gray-900 inline-block">{text}</h4>
			</div>
			<FriendMenu/>
		</div>

	);
	return element;
}
export {AddFriends,CreateGroup,ActionNone}
