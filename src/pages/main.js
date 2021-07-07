import React from "react";
import {useState} from "react"
import {Link} from "react-router-dom";
import {InputBox,MsgBox,ChatBox} from "../components/MsgComponents.js";
import {SideBar} from "../components/SideBarComponents.js";
import {NavBar,InfoBar} from "../components/InfoBarComponents.js";

const Main = () => {
	const [infoBarActive,setInfoBar] = useState(true);
	const [sideBarActive,setSideBar] = useState(true);
	const element = (
		<main className="h-screen overflow-y-hidden flex">
			<div id="bg-dark" className="fixed top-0 left-0 w-full h-full bg-dark hidden"></div>
			<SideBar active={sideBarActive} setActive={sideBarActive}/>
			<section className="w-full h-screen overflow-y-hidden md:w-3/4 relative">
				<NavBar sideActive={sideBarActive} setSideActive={sideBarActive} infoActive={infoBarActive} setInfoActive={setInfoBar}/>
				<div className="flex overflow-x-hidden">
					<ChatBox/>
					<InfoBar active={infoBarActive}/>
				</div>
			</section>
		</main>
	);
	return element;
}


export default Main;
