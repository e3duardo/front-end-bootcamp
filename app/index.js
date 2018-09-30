import React, { Component } from "react"
import Headline from "./components/Headline"
import Button from "./components/Button"
import Search from "./components/Search"
import "./styles.less"

import { getItem, search } from "./services/api";
import storageService from "./services/storage";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Headline>Hello human!</Headline>
        <Button type="Like">Add to favorites</Button>
        <Button type="Back"></Button>
        <Search></Search>
      </div>
    )
  }
}
