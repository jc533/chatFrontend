import React from "react";
import {useState} from "react"
import {Link} from "react-router-dom";



const InputBox = () => {
	const element = (
		<div className="w-full p-3 bg-white border-t border-gray-300">
			<form action="" method="post" className="flex">
				<button onclick="" className="focus:outline-none bg-transparent border-0 text-gray-600 hover:text-gray-700 text-2xl mdi mdi-sticker-emoji px-2"></button>
				<button onclick="" className="focus:outline-none bg-transparent border-0 text-gray-600 hover:text-gray-700 text-2xl mdi mdi-image px-2"></button>
				<input type="text" className='custom-input mx-2' style={{"width": "calc(100% - 164px)"}} placeholder="輸入文字" required/>
				<button type="submit" className="btn btn-success mdi mdi-send ml-2"></button>
			</form>
		</div>
	);
	return element;
}
const MsgBox = (props) => {
	const element = (
		<div className="message">
			<div className="message-profile-photo">
				<span className="mdi mdi-account-circle text-gray-700 text-2xl"></span>
			</div>
			<div className="message-content">
				<h4>user · 19:05</h4>
				<div className="message-bubble">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, omnis itaque aperiam hic, veniam voluptas quisquam, non illum accusantium similique doloribus modi eveniet ea vitae minima voluptatem. Ut, dolor culpa?
				</div>
			</div>
		</div>
	);
	return element;

}
const ChatBox = (props) => {
	const element = (
		<div id="chat" 
			className={`w-3/4 ${props.active ? "" : "infobar-hide-chat"}`}>
			<div id="content" className="overflow-y-scroll p-4 custom-scroll-bar"
				style={{"height": "calc(100vh - 131px)"}}>
				<MsgBox/>
			</div>
			<InputBox/>
		</div>
	);
	return element;
}

export {InputBox,MsgBox,ChatBox};
