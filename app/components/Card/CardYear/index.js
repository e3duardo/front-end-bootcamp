import React, { Component } from "react";
import "./styles.less";

export default class CardYear extends Component {
	render() {
		const { children } = this.props;

		return (
			<span className="CardYear">{ children }</span>
		);
	}
}