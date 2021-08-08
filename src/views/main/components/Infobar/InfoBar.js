import React from "react";
import {useState} from "react"
import {Link} from "react-router-dom";
import { Transition } from "@headlessui/react";
import {SearchBox,LeaveBox,AddFriendBox} from "./InfoAction.js";

const InfoBar = (props) => {
	const [action,setAction] = useState("none");
	const element = (
		<div id="infobar" className={
			`custom-scroll-bar 
			${props.active ? "" : "infobar-hide"}`}>
			<DefaultInfoBar action={action} setAction={setAction}/>
			<SearchBox action={action} setAction={setAction}/>
			<LeaveBox action={action} setAction={setAction}/>
			<AddFriendBox action={action} setAction={setAction}/>
		</div>);
	return element;
}
const DefaultInfoBar = (props) => {
	const element = (
		<Transition show={props.action==='none'}>
		<div class="absolute w-full">
			<InfoTitle/>
			<hr class="border-gray-300"/>
			<FunctionBox action={props.action} setAction={props.setAction}/>
			<hr class="border-gray-300"/>
			<MemberList action={props.action} setAction={props.setAction}/>
		</div>
		</Transition>
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
const MemberList = (props) => {
	const friends = ["a","b","c"];
	const memberEle = friends.map((text,id)=>(
		<div key={id} class="list-item justify-start">
			<span class="mdi mdi-account text-gray-600 text-xl"></span>
			<p class="ml-4">{text}</p>
		</div>
	));
	const element = (
		<div class="p-2">
			<h4 class="text-gray-600 pl-2 text-sm mb-2">成員</h4>
			<button class="list-item justify-start" onClick={()=>props.setAction('addFriend')}>
				<span class="mdi mdi-account-plus text-blue-500 text-xl"></span>
				<p class="ml-4">新增成員</p>
			</button>
			{memberEle}
		</div>
	);
	return element;
}
const FunctionBox = (props) => {
	const element = (
		<div class="p-2">
			<button class="list-item" onClick={()=>props.setAction('search')}>
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
			<button class="list-item" onClick={()=>props.setAction('leave')}>
				<div class="text-left">
					<h4>退出群組</h4>
				</div>
				<span class="mdi mdi-logout text-red-500 text-xl"></span>
			</button>
		</div>
	);
	return element;
}




export default InfoBar;
