import React,{createContext} from "react";
import io from "socket.io-client";


const wsContext = createContext(null);

const wsProvider = ({children}) => {


	return (<div></div>);
}


export default wsProvider;
