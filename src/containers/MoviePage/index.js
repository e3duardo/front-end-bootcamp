import React, { Component } from "react";
import {inject, observer} from 'mobx-react';

import WhatsIn from '../../components/WhatsIn';
import ButtonIcon from '../../components/ButtonIcon';
import Label from '../../components/Label';
import Button from '../../components/Button';
import "./style.less";


@inject('rootStore') @observer
export default class MoviePage extends Component {
	constructor(props){
		super(props);

		this.state ={
			loading: true,
			movie: {}
		}

		const imdbID = this.props.match.params.id;

		this.props.rootStore.movieStore.searchMovie(imdbID).then(result=>this.setState({loading:false, movie: result}));
	}
	render() {
		console.log(this.state.movie)
		const movie = this.state.movie;
		return (
			<div className={`MoviePage`}>
				<div className="container">
					<WhatsIn />
					<ButtonIcon />


					{
						this.state.loading?(
							<div>Carregando...</div>
						):(
							<div className={`row`}>
								<div className={`col-6`}>

									<div className="MoviePage__Runtime">{movie.Runtime} · {movie.Year} · <span className="Badge">{movie.Rated}</span></div>

									<h1 className="MoviePage__Title">{movie.Title}</h1>

									<div className="row">
										<div className="col-10">
											<div className="MoviePage__Labels">
												{
													movie.Ratings.map((rating, index)=><Label rating={rating} key={index} />)
												}
												<Button />
											</div>

											<div>
												<h2 className="MoviePage__Detail">Plot</h2>
												{movie.Plot}
											</div>

											<div className="MoviePage__Row">
												<div>
													<h2 className="MoviePage__Detail">Cast</h2>
													{movie.Actors.split(',').map((item, index)=><p key={index}>{item}</p>)}
												</div>

												<div>
													<h2 className="MoviePage__Detail">Genre</h2>
													{movie.Genre.split(',').map((item, index)=><p key={index}>{item}</p>)}
												</div>

												<div>
													<h2 className="MoviePage__Detail">Director</h2>
													{movie.Director.split(',').map((item, index)=><p key={index}>{item}</p>)}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={`col-1`}>
								</div>
								<div className={`col-5`}>
									<img src={movie.Poster} className="MoviePage__Image"/>
								</div>
							</div>
						)
					}
				</div>
			</div>
		);
	}
}
