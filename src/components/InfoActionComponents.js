import React from "react";
import {useState} from "react"
import {Link} from "react-router-dom";
import { Transition } from "@headlessui/react";
import {SearchForm,InfoAddFriendForm} from "./FormComponents.js"
import ClickAwayListener from 'react-click-away-listener';

const SearchBox = (props) => {
	const element = (
		<Transition show={props.action==="search"}
			enter="transition ease-out duration-200"
			enterFrom="opacity-0 transform -translate-y-4"
			enterTo="opacity-100"
			leave="transition ease-out duraton-200"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<ClickAwayListener onClickAway={()=>props.setAction("none")}>
				<div class="w-full absolute">
					<div class="p-3">
						<div class="flex items-center">
							<button class="mdi mdi-arrow-left btn-actionbar" onClick={()=>props.setAction('none')}></button>
							<p class="ml-4 text-gray-900 text-lg">搜尋</p>
						</div>
						<SearchForm action={props.action} setAction={props.setAction}/>
					</div>
				</div>
			</ClickAwayListener>
		</Transition>
	);
	return element;
}
const LeaveBox = (props) => {
	const element = (
		<Transition show={props.action==='leave'}
			enter="transition ease-out duration-300"
			enterFrom="opacity-0 transform scale-75"
			enterTo="opacity-100"
			leave="transition ease-out duration-300"
			leaveFrom="opacity-100"
			leaveTo="opacity-0">
			<ClickAwayListener onClickAway={()=>props.setAction("none")}>
				<div class="w-full absolute">

					<div class="p-3">
						<div class="flex items-center">
							<button class="mdi mdi-arrow-left btn-actionbar" onClick={()=>props.setAction("none")}></button>
							<p class="ml-4 text-gray-900 text-lg">退出群組</p>
						</div>

						<p class="text-gray-600 my-5">
							你確定要退出？
						</p>

						<div class="mt-4 grid grid-cols-2 gap-4">
							<button class="btn btn-secondary" type="reset"
								onClick={(e)=>{e.preventDefault();props.setAction("none")}}>取消</button>
							<button type="submit" class="btn btn-danger">退出</button>
						</div>

					</div>
				</div>
			</ClickAwayListener>
		</Transition>
	);
	return element;
}
const AddFriendBox = (props) => {
	const element = (
		<Transition show={props.action==='addFriend'}
			enter="transition ease-out duration-300"
			enter="opacity-0 transform scale-75"
			enterFrom="opacity-100"
			leave="transition ease-out duration-300"
			leaveFrom="opacity-100"
			leaveTo="opacity-0">
			<ClickAwayListener onClickAway={()=>props.setAction('none')}>
				<div class="w-full absolute">
					<div class="p-3">
						<div class="flex items-center">
							<button class="mdi mdi-arrow-left btn-actionbar" onClick={()=>props.setAction('none')}></button>
							<p class="ml-4 text-gray-900 text-lg">新增成員</p>
						</div>
						<InfoAddFriendForm action={props.action} setAction={props.setAction}/>
					</div>
				</div>
			</ClickAwayListener>
		</Transition>
	);
	return element;
}





export {SearchBox,LeaveBox,AddFriendBox};
