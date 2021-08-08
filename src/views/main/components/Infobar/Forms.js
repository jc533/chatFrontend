import React from "react";
import {useState} from "react"
import {Link,Redirect} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";


const SearchForm = (props) => {
	const element = (
		<form action="" method="post" class="mt-4">
			<input type="text" class="custom-input w-full"/>

			<div class="mt-4 grid grid-cols-2 gap-4">
				<button class="btn btn-secondary" type="reset"
					onClick={(e)=>{e.preventDefault();props.setAction("none")}}>取消</button>
				<button type="submit" class="btn btn-primary">搜尋</button>
			</div>
		</form>
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
const InfoAddFriendForm = (props) => {
	const element = (
		<form action="" class="my-2">
			<FriendGroupList/>
			<div class="mt-4 grid grid-cols-2 gap-4">
				<button class="btn btn-secondary" type="reset"
					onClick={()=>props.setAction('none')}>取消</button>
				<button type="submit" class="btn btn-primary">新增</button>
			</div>
		</form>
	);
	return element;
}

export {SearchForm,InfoAddFriendForm};
