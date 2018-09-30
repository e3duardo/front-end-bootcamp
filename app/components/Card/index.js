import React, { Component } from "react";
import "./styles.less"
import Col from "../Grid/Col";
import Button from "../Button";

export default class Card extends Component{
  render(){
    const image_url = "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg";
    return (
      <Col>
        <article className={`Card`}>
          <img src={ image_url } className="Card--Background" />
          <div className="Card--Content">
            <Button type="MiniLike"/>
          </div>
        </article>
      </Col>
    )
  }
}
