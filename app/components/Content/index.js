import React, { Component } from "react"
import "./styles.less"

import Card from "../Card"
import ContentNull from "./ContentNull"

export default class Content extends Component {
	componentDidMount() {
		console.log(this.props);
	}
	render() {
		const { items } = this.props;

		return (
			<div className="Content">
				{items.length===0 
					? (
						<ContentNull />
					)
					: (
						<Card />
					)
				}
			</div>
		);
	}
}