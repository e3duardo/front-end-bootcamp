import React, { Component } from "react"
import "./styles.less"

import Illustration from "./assets/illustration.png"

export default class ContentNull extends Component {
	render() {
		return (
			<div className="ContentNull">
				<img src={Illustration} />
				<p>Don't know what to search?</p>
				<small>Here's an offer you can't refuse</small>
			</div>
		)
	}
}