import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import "./style.less";

export default class MovieCardForeground extends Component {
	render() {
		const {movie} = this.props;
		return (
			<div className="MovieCardForeground">
				<button className="MovieCardForeground__Icon"></button>
				<NavLink className="MovieCardForeground__Title" to={`/movies/${movie.imdbID}`}>
					<h2>{movie.Title}</h2>
					{movie.Year}
				</NavLink>
			</div>
		);
	}
}
