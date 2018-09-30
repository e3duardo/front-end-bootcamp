import React, { Component } from "react";
import "./styles.less"

import Illustration from "./assets/illustration-empty-state.png"

export default class ContentNull extends Component{

  ComponentDidMount(){
    console.log(this.array.data)
  }

  render(){
    const { items } = this.props;
    return (
      <div className="ContentNull">
        <img src={Illustration} />
        <p>Downt know what to search?</p>
        <small>Heres an offer</small>
      </div>
    )
  }
}
