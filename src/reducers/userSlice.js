import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	name: "",
	rooms: [],
	messages: [],
	friends: [],
	active: false
}
/*export const singIn = createAsyncThunk(
	'user/singIn',
	async (data) => {
		try{
			let res = await axios.post("http://localhost:8080/login",data)
			console.log(res.data)
			console.log(res.data.error)
			if(res.data.error){
				console.log("jizzzzzz")
				console.error(res.data.con)
			}else{
				window.sessionStorage.setItem("name", data.name);
				return {name:data.name,active:true}
			}

		}catch(e){
			console.error(e)
		}
	}
)
export const singUp = createAsyncThunk(
	'user/singUp',
	async (data) => {
		try{
			let res = await axios.post("http://localhost:8080/register",data)
			if(res.data.error){
				console.error(res.data.con)
			}else{
				window.sessionStorage.setItem("name", data.name);
				return {name:data.name,active:true}
			}

		}catch(e){
			console.error(e)
		}
	}
)*/
/*export const checkLogined = createAsyncThunk(
	"user/checkLongined",
	async ()=>{
		let name = window.sessionStorage.getItem("name");
		console.log(name);
		if(name){
			return {name,active:true};
		}else{
			return {name:null,active:false}
		}
	}
)*/


const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers:{
		login:(state,action)=>{
			console.log(action.payload)
			state.name = action.payload.name;
			state.rooms = action.payload.rooms
			state.active = true;
		},
		logout: (state,action)=>{
			state.name = null;
			state.active = false;
			state.rooms = [];
		},
		checkLogined:(state,action)=>{
			let name = window.sessionStorage.getItem("name");
			console.log(name);
			if(name){
				state.name=name;
				state.active=true;
			}else{
				state.name = null
				state.active = false
			}


		},
	}
		/*extraReducers: {
		[singIn.fullfilled]:(state,action)=>{
			state.active = action.payload.active;
			state.name = action.payload.active;
		},
		[singUp.fullfilled]:(state,action)=>{
			state.active = action.payload.active;
			state.name = action.payload.active;
		}*/
		/*[checkLogined.fullfilled]:(state,action) => {
			state.active = action.payload.active;
			state.name = action.payload.name;
		}
	}*/
	})


export const {login,logout,checkLogined} = userSlice.actions;

export default userSlice.reducer
