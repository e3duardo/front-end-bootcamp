import React, { Component } from "react";
import "./style.less";

export default class Button extends Component {

	render() {
		const {active} = this.props;
		return (
			<button className={`Button ${active?'Button--active':''}`} onClick={this.handleClick}>
				Add to favourites
			</button>
		);
	}
}
