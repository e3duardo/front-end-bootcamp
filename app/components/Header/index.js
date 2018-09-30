import React, { Component } from "react";
import "./styles.less"

import Container from "../Grid/Container"
import Row from "../Grid/Row"

export default class Header extends Component{
  render(){
    const { children, type } = this.props;

    return (
      <div className="Header">
        <Container >
          <Row>
            <h1 className="Header--Logo">Whats In</h1>
          </Row>
        </Container>
      </div>
    )
  }
}
