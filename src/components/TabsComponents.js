import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import {ActionNone,CreateGroup,AddFriends,FriendsList} from "./FriendsTabComponents";
const Tabs = () => {
	const [tab, setTab] = useState("message");
	const propSetTab = (e) => setTab(e);
	let tabEle;
	if(tab==='message') tabEle = (<MsgTab/>)
	else if(tab==='friends') tabEle=(<FriendsTab/>)
	const element = (
		<div>
			<TabBar tab={tab} setTab={propSetTab}/ >
			{tabEle}
		</div>

	);
	return element;
}
const TabBar = (props) => {
	const element = (
		<div>
			<div className="w-full flex items-center">
				<button className={`w-1/2 p-2 mdi mdi-account-multiple border-b-2 border-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none ${props.tab === 'friends' ? 'text-blue-500 border-blue-500':""}`} onClick={() => props.setTab('friends')}>
					朋友</button>
				<button className={`w-1/2 p-2 mdi mdi-message-text border-b-2 border-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none ${props.tab === 'message' ? 'text-blue-500 border-blue-500':""}`} onClick={() => props.setTab('message')}>
					訊息</button>
			</div>
		</div>

	);
	return element;
}
const FriendsTab = (props) => {

	const [action, setAction] = useState('none');
	const propSetAction = (e) => setAction(e)
	const element = (
		<div>
			<ActionNone action={action} setAction={propSetAction}/>
			<AddFriends action={action} setAction={propSetAction}/>
			<CreateGroup action={action} setAction={propSetAction}/>
		</div>
	);
	return element;
}
const MsgTab = (props) => {
	const element = (
		<div id="add_rooms">
			<GroupList/>	
		</div>
	)
	return element;
}
const GroupList = () => {
	const groups = [{"type":"account","title":"Lorem, ipsum dolor."},{"type":"group","title":"test group"}];
	const element = groups.map((obj,id)=>
		<a key={id} href="#" onclick="sidebarToggle()" className="aside-item">
			<span className={`mdi mdi-account${obj.type==="group" ? "-group" : ""}-outline text-gray-700 text-4xl mr-4`}></span>
			<div className="inline-block">
				<h4 className="text-gray-900 text-lg">{obj.title}</h4>
				<p className="text-gray-600">{obj.type}</p>
			</div>
		</a>
	);
	return element;
}
		export {Tabs};
