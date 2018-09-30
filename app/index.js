import React, { Component } from "react"
import Headline from "./components/Headline"
import Button from "./components/Button"
import Search from "./components/Search"
import Card from "./components/Card"
import Container from "./components/Grid/Container"
import Row from "./components/Grid/Row"
import SearchContainer from "./containers/Search"
import "./styles.less"

import { getItem, search } from "./services/api";
import storageService from "./services/storage";

export default class App extends Component {
  render() {
    return (
      <SearchContainer />
    )
  }
}
