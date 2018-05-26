import React, { Component } from "react";
import ReactDOM from "react-dom";
import NoticiasListItem from './NoticiasListItem';
import axios from 'axios'
import banner from '../../../media/images/banner.png';

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

    axios.get("http://54.37.8.167:8000/api/noticias/"+categoria).then(function(response){
      that.setState({
        noticias:response.data
      })
    }).catch( function(e) {
      console.log(e);
    })
  }

  render() {
    const NoticiasList=this.state.noticias.map((noticia)=>{
      return <NoticiasListItem key={noticia.id} id={noticia.id} title={noticia.title} description={noticia.description} />
    })      
    return (
    <div>
      <picture className='banner'>
      <img src={banner} alt="Banner"/>
      </picture>
      {NoticiasList}
    </div>
    )
  }
}

export default Noticias
