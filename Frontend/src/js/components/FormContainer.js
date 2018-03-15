import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: "Titulo aplicacion",
      text: ""
    };

    this.handleChangeInput=this.handleChangeInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }


  handleChangeInput(event){
      event.preventDefault();
      this.setState({
        text : event.target.value
      });
      console.log(this.state)
  }

  handleSubmit(event){
    event.preventDefault();
    $.ajax({
      headers: {
        contentType: "application/json",
      },
      type: 'POST',
      url: 'http://localhost:8000/api/testing',
      data:this.state
    })
    .done(function(data) {
      alert("Datos venidos del backend"+JSON.stringify(data));
    })
    .fail(function(jqXhr) {
      console.log(jqXhr);
    });
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