import React, { Component } from "react"
import "./styles.less"

import Container from "../../components/Grid/Container"
import Row from "../../components/Grid/Row"

export default class Header extends Component {
	render() {
		return (
			<header className="Header">
				<Container>
					<Row>
						<h1 className="Header--Logo">Whats in</h1>
					</Row>
				</Container>
			</header>
		)
	}
}