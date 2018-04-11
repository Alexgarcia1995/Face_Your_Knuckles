import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import NoticiasListItem from './NoticiasListItem';

class Noticias extends Component {
  constructor() {
    super();
    this.state = {
      noticias:[],
      categoria:window.location.pathname.split("/")[2]
    };
  }
  componentWillMount(){
    let that=this;
    let categoria=this.state.categoria;
    if (categoria==undefined){
      categoria="Boxeo"
    }

   $.ajax({
     url:"http://localhost:8000/api/noticias/"+categoria,
     success: function(data){
       that.setState({
         noticias:data
       })
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert (textStatus, + ' | ' + errorThrown);
    }
   })
  }

  render() {
    const NoticiasList=this.state.noticias.map((noticia)=>{
      return <NoticiasListItem key={noticia.id} id={noticia.id} title={noticia.title} description={noticia.description} />
    })      
    return (
    <div>
      {NoticiasList}
    </div>
    )
  }
}

export default Noticias
