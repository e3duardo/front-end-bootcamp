import React, { Component } from "react";
import "./styles.less"

import Header from "../../components/Header"
import Search from "../../components/Search"
import Content from "../../components/Content"
import Container from "../../components/Grid/Container"
import Row from "../../components/Grid/Row"

export default class SearchContainer extends Component{
  render(){
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
