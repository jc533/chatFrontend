import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./reducers/userSlice"

export default configureStore({
	reducer:{
		user: usersReducer
	}
});
