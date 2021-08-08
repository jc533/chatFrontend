import React from "react";
import {useState} from "react"
import {Link,Redirect} from "react-router-dom";
import {FriendGroupList} from "../Menus.js";
import axios from "axios";
import {useDispatch} from "react-redux";

const AddFriendsForm = (props) => {
	const addFriend = (e) => {
		e.preventDefault();
		props.setAction('none');
	}
	const element = (
		<form action="" onSubmit={addFriend} method="post" className="p-3">
			<p className="text-gray-600 mb-2">請在下方輸入你要新增的帳號。</p>
			<input type="text" className="custom-input w-full" x-ref="addFriendInput" required />
			<div className="mt-4 grid grid-cols-2 gap-4">
				<button className="btn btn-secondary" type="reset"
					onClick={(e) => { e.preventDefault(); props.setAction('none') }}>取消</button>
				<button type="submit" className="btn btn-primary">新增</button>
			</div>
		</form>
	)
	return element
}
const AddGroupForm = (props) => {
	const addGroup = (e) => {
		e.preventDefault();
		props.setAction("none")
	}

	const element = (
		<form action="" onSubmit={addGroup} method="post" className="p-3">
			<FriendGroupList/>
			<div className="mt-4 grid grid-cols-2 gap-4">
				<button className="btn btn-secondary" type="reset"
					onClick={(e)=>{e.preventDefault();props.setAction('none')}}>取消</button>
				<button type="submit" className="btn btn-primary">建立</button>
			</div>
		</form>
	);
	return element;
}
export {AddFriendsForm,AddGroupForm};
