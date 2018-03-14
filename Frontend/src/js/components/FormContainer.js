import React, { Component } from "react";
import ReactDOM from "react-dom";
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      text: ""
    };

    this.handleChangeInput=this.handleChangeInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }


  handleChangeInput(event){
      event.preventDefault();
      console.log(event.target.value)
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(event.target);
  }

  render() {
    return (
      <form id="article-form" onSubmit={this.handleSubmit}>
      <input id="texto" name="texto" onChange={this.handleChangeInput} />
      <br/>
      <button type="submit" value="Enviar">Enviar </button>
      </form>
    );
  }
}
export default FormContainer;