import React, { Component } from "react";
import "./styles.less";

export default class Search extends Component {

	handleSearch(e) {
		console.log(e.currentTarget.value);
	}

	render() {
		return (
			<div className="Search">
				<input 
					className="Search--Field"
					type="search"
					placeholder="Search movies..."
					onChange={e => this.handleSearch(e)}
				/>
			</div>
		);
	}
}