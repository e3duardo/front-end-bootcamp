import React, { Component } from "react";
import {inject, observer} from 'mobx-react';

import WhatsIn from "../../components/WhatsIn";
import SearchBar from "../../components/SearchBar";
import MovieCard from "../../components/MovieCard";
import NothingHere from "../../components/NothingHere";
import "./style.less";

@inject('rootStore') @observer
export default class HomePage extends Component {
	render() {
		const movieStore = this.props.rootStore.movieStore;
		return (
			<div className={`HomePage`}>
				<div className="container">
					<WhatsIn />
					<SearchBar />
				</div>
				<div className="MoviesCardContainer">
					{
						movieStore.hasMovies?(
							movieStore.movies.map((movie, index)=>
								<MovieCard movie={movie} key={movie.imdbID} index={index}/>
							)
						):(
							<NothingHere />
						)
					}
				</div>
			</div>
		);
	}
}
