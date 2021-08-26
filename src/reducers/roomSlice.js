import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	rooms: [{"roomNum":"","members":[],"msgs":[],"name":""}]
}
const roomsSlice = createSlice({
	name: 'rooms',
	initialState,
	reducers:{
		setInit:(state,action)=>{
			state.data = action.payload.data;
			state.rooms = state.rooms.concat(action.payload.rooms)
		}



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
export const {setInit} = roomsSlice.actions;

export default roomsSlice.reducer
