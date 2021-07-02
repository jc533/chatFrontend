import React from "react";
import {useState} from "react"
import {Link} from "react-router-dom";

const NavBar = () => {
	const element = (
		<nav id="navbar" className="flex items-center justify-between py-3 px-5 sticky border-b border-gray-300">
                <button onclick="sidebarToggle()"
                    className="btn-actionbar text-2xl mdi mdi-menu inline-block md:hidden mr-3"></button>

                <div className="flex items-center">
                    <span className="mdi mdi-account-group-outline text-2xl text-blue-500 mr-4"></span>
                    <h4 className="text-lg text-gray-900">群組</h4>
                </div>

                <div>
                    <button className="mdi mdi-phone btn-actionbar mr-5"></button>
                    <button id="infobar-btn" className="mdi mdi-information btn-actionbar text-blue-500" onclick="infobarToggle()"></button>
                </div>
            </nav>
	);
	return element;
}



export {NavBar};
