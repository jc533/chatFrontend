import {login} from "reducers/userSlice";
import {setInit} from "reducers/roomSlice";
import axios from "axios";

export {login,logout,checkLogined} from "reducers/userSlice"
export {setInit} from "reducers/roomSlice"

export async function sendLogin(action,data,dispatch,history){
	console.log("jizz")
	try{
		let res = await axios.post(`http://localhost:8080/${action}`,data)
		let userData = res.data.data
		console.log(res.data)
		if(res.data.code!=200){
			console.log("jizzzzzz")
			console.error(res.data.con)
		}else{
			window.sessionStorage.setItem("name", data.name);
			dispatch(login({name:data.name,rooms:userData.rooms,friends:userData.friends}));
			dispatch(setInit({data:userData,rooms:userData.rooms}))
			//history.push("/")
		}

	}catch(e){
		console.error(e)
	}

}
export async function sendRegister(action,data,dispatch,history){
	console.log("hi")
	try{
		let res = await axios.post(`http://localhost:8080/${action}`,data)
		console.log(res.data)
		let userData = res.data.data
		if(res.data.code!=200){
			console.log("jizzzzzz")
			console.error(res.data.con)
		}else{
			sendLogin("login",data,dispatch,history)

		}

	}catch(e){
		console.error(e)
	}

}
 


