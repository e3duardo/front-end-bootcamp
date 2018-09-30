import React, { Component } from "react";
import "./styles.less";

export default class Button extends Component {
	componentDidMount() {
		console.log(this.props.type);
	}
	render() {
		const { children, type } = this.props;

		return (
			<button className={`Button Button--${type}`}>
				{ children }
			</button>
		);
	}
}