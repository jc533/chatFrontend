import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./reducers/userSlice"
import roomsSlice from "./reducers/roomSlice"

export default configureStore({
	reducer:{
		user: usersReducer,
		rooms: roomsSlice
	}
});
