import React, { Component } from "react";
import "./style.less";
import MovieCardForeground from "./MovieCardForeground";

export default class MovieCard extends Component {
	render() {
		const {movie} = this.props;

		return (
			<div className={`MovieCard`}>
				<MovieCardForeground movie={movie}/>
				<img src={movie.Poster} className="MovieCard__Background" />
			</div>
		);
	}
}
