import React from "react";
import { useState } from "react"

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
export default MsgTab;
