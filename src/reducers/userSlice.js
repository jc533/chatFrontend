import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
	uid: "",
	name: "",
	active: false
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers:{}
})




export default userSlice.reducer
