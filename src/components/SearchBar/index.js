import React, { Component } from "react";
import {inject} from 'mobx-react';

import "./style.less";

let timeout = null;

@inject('rootStore')
export default class SearchBar extends Component {


	handleSearch = e => {
		const value = e.target.value;
		clearTimeout(timeout);
	    timeout = setTimeout(() => {
			// this.props.rootStore.uiStore.handleSearch(value);
			this.props.rootStore.movieStore.searchMovies(value);
	    }, value?400:0);
	}

	render() {
		const {search, autofocus, disabled} = this.props;

		return (
			<div className={`SearchBar ${disabled?'SearchBar--Disabled':''}`}>
				<input className="SearchBar__Input"
						type="search"
						value={search}
						disabled={disabled}
						autoFocus={autofocus}
						placeholder="Search movies..."
						onChange={this.handleSearch}/>
			</div>
		);
	}
}
