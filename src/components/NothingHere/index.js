import React, { Component } from "react";
import "./style.less";

export default class NothingHere extends Component {
	render() {
		return (
			<div className={`NothingHere`}>
				<img className="NothingHere__Image" src={require("./assets/illustration-empty-state.png")}/>
				<h2 className="NothingHere__Text">Don`t know what to search?</h2>
				<p className="NothingHere__SmallText">Here`s an offer you cant`t refuse</p>
			</div>
		);
	}
}
