import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';

class Noticias extends Component {
  constructor() {
    super();
    this.state = {
      title: "Titulo aplicacion",
      text: ""
    };
  }
  render() {
    return <div>Noticias</div>
  }
}

export default Noticias