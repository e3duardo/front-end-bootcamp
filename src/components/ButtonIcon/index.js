import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import "./style.less";

export default class ButtonIcon extends Component {
	render() {
		return (
			<NavLink to="/" className={`ButtonIcon`}></NavLink>
		);
	}
}
