import React, { Component } from "react";
import DevTools from 'mobx-react-devtools';
import {Router, Route, NavLink, HashRouter, BrowserRouter} from "react-router-dom";

import HomePage from "./containers/HomePage";
import MoviePage from "./containers/MoviePage";
import "./style.less";

export default class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Route exact path="/" component={HomePage}/>
						<Route path="/movies/:id" component={MoviePage}/>
					</div>
				</BrowserRouter>
				<DevTools />
			</div>
		);
	}
}
