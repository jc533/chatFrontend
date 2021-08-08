import React from "react";
import {useState,useEffect} from "react"
import {Link,Redirect} from "react-router-dom";
import {SideBar,InputBox,MsgBox,ChatBox,NavBar,InfoBar} from "./components";
import {useSelector,useDispatch} from "react-redux";
import {checkLogined} from "actions";

const Main = () => {
	const [infoBarActive,setInfoBar] = useState(true);
	const [sideBarActive,setSideBar] = useState(true);
	const dispatch = useDispatch();
	const isActive = useSelector(state=>state.user.active)
//window.sessionStorage.getItem("name") 
	dispatch(checkLogined())
	if(!isActive){
		alert(isActive)
		return <Redirect to="/login"/>
	}
	const element = (
		<main className="h-screen overflow-y-hidden flex">
			<div id="bg-dark" className={`fixed top-0 left-0 w-full h-full bg-dark ${sideBarActive ? "block" : "hidden"}`} onClick={()=>setSideBar(false)}></div>
			<SideBar active={sideBarActive} setActive={setSideBar}/>
			<section className="w-full h-screen overflow-y-hidden md:w-3/4 relative">
				<NavBar sideActive={sideBarActive} setSideActive={setSideBar} infoActive={infoBarActive} setInfoActive={setInfoBar}/>
				<div className="flex overflow-x-hidden">
					<ChatBox active={infoBarActive} setActive={setInfoBar}/>
					<InfoBar active={infoBarActive}/>
				</div>
			</section>
		</main>
	);
	return element;
}


export default Main;
