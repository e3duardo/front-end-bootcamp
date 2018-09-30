import React, { Component } from "react";
import "./styles.less";

export default class GridRow extends Component {
	render() {
		const { children } = this.props;
		
		return (
			<div className="Row">
				{ children }
			</div>
		);
	}
}