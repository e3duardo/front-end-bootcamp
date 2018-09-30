import React, { Component } from "react"
import Headline from "./components/Headline"
import Button from "./components/Button"
import Search from "./components/Search"
import Card from "./components/Card"
import Container from "./components/Grid/Container"
import Row from "./components/Grid/Row"
import "./styles.less"

import { getItem, search } from "./services/api";
import storageService from "./services/storage";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </Row>
        </Container>
      </div>
    )
  }
}
