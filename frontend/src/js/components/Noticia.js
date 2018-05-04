import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'

class Noticia extends Component {
    constructor() {
      super();
      this.state = {
        id: window.location.pathname.split("/")[2],
        title:"",
        description:""
      };
      this.componentDidMount=this.componentDidMount.bind(this);
    }

    componentDidMount(){
        let that=this;
        axios.get("http://localhost:8000/api/noticia/"+this.state.id).then(function(response){
            that.setState({
                title: response.data[0].title,
                description:response.data[0].description
            })
          }).catch( function(e) {
            console.log(e);
          })
    }
    
    render() { 
        return (
        <div className="video-player">
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        </div>
        );
        }
    }

export default Noticia