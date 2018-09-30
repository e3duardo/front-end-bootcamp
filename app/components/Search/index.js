import React, { Component } from "react";
import "./styles.less";

export default class Search extends Component{

  handleSearch(e){

  }

  render (){
    const { value } = this.props;

    return (
      <div className="Search">
        <input value={ value }
                type="search"
                placeholder="Search movies..."
                onChange={e => this.handleSearch(e)}/>
      </div>
    );
  }
}
