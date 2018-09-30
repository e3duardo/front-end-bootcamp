import React, { Component } from "react"
import "./styles.less"

export default class Headline extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className="Headline">
        <h1>{ title }</h1>
      </div>
    )
  }
}
