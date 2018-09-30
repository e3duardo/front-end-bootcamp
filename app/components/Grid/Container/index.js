import React, { Component } from "react";
import "./styles.less";

export default class GridContainer extends Component {
	render() {
		const { children } = this.props;
		
		return (
			<section className="Container">
				{ children }
			</section>
		);
	}
}