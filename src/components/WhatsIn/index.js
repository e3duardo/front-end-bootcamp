import React, { Component } from "react";
import "./style.less";

export default class WhatsIn extends Component {
	render() {
		return (
			<div className={`WhatsIn`}>
				<img className="WhatsIn__Image" src={require("./assets/logo.svg")}/>
			</div>
		);
	}
}
