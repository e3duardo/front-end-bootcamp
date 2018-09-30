import React, { Component } from "react";
import "./styles.less"

export default class GridCol extends Component{
  render(){
    const { children } = this.props;

    return (
      <div className={`Col`}>
        { children }
      </div>
    )
  }
}
