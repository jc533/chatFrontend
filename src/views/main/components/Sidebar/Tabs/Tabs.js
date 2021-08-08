import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import FriendsTab from "./FriendsTab";
import MsgTab from "./MsgTab";
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
export default Tabs;
