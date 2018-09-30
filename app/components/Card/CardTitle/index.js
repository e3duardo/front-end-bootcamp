import React, { Component } from "react";
import "./styles.less";

export default class CardTitle extends Component {
	render() {
		const { children } = this.props;

		return (
			<h3 className="CardTitle">{ children }</h3>
		);
	}
}