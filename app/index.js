import React, { Component } from "react"
import "./styles.less"

import SearchContainer from "./containers/Search"

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<SearchContainer />
			</div>
		)
	}
}
