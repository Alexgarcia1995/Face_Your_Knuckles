import React, { Component } from "react";
import ReactDOM from "react-dom";
import YouTube from 'react-youtube';
import $ from 'jquery';

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
        $.ajax({
            url:"http://localhost:8000/api/noticia/"+this.state.id,
            success: function(data){
                that.setState({
                    title: data[0].title,
                    description:data[0].description
                   });
           },
           error: function(jqXHR, textStatus, errorThrown) {
             alert (textStatus, + ' | ' + errorThrown);
           }
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