import 'babel-polyfill';

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { configure } from "mobx";

import App from "./src";
import RootStore from "./src/stores/RootStore";

configure({
	enforceActions: "observed"
});

const root = document.getElementById("root");

ReactDOM.render(
	<Provider rootStore={new RootStore()}>
		<App />
	</Provider>, root);

if (module.hot) {
	module.hot.accept();
}
