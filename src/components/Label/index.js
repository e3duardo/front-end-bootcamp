import React, { Component } from "react";
import "./style.less";

export default class Label extends Component {
	render() {
		const {rating} = this.props;
		console.log(rating);

		const canShow = ['Internet Movie Database', 'Rotten Tomatoes'].includes(rating.Source);

		if(canShow){
			const isImdb = rating.Source=='Internet Movie Database';
			const logo = isImdb?require('./assets/logo-imdb.svg'):require('./assets/logo-rotten-tomatoes.svg');

			return (
				<div className={`Label ${isImdb?'Label--Imdb':'Label--Rotten'}`}>
					<div className={`Label__Image`}>
						<img src={logo}/>
					</div>
					<div className={`Label__Text`}>
						{rating.Value}
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}
