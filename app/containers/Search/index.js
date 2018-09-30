import React, { Component } from "react"

import Header from "../../components/Header"
import Search from "../../components/Search"
import Container from "../../components/Grid/Container"
import Row from "../../components/Grid/Row"
import Content from "../../components/Content"

export default class SearchContainer extends Component {
	render() {
		return (
			<Container>
				<Header />
				<Row>
					<Search />
				</Row>
				<Row>
					<Content items={[1]} />
				</Row>
			</Container>
		)
	}
}