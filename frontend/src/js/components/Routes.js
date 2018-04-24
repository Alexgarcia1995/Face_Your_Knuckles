import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Noticias from './Noticias.js';
import Videos from './Videos.js';
import VideoDetail from "./VideoDetail.js";
import Noticia from "./Noticia.js";
import Login from "./Login.js";
import Register from "./Register.js";
import Profile from "./Profile";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state={
      noticias:props.noticias,
      videos:props.videos
    }
  }

  render() {
    const noticias = this.state.noticias.map((categoria)=>{
      let url="/noticias/"+categoria
      return (
      <Route key={categoria} path={url} component={Noticias} />
      )
    })

    const videos = this.state.videos.map((categoria)=>{
      let url="/videos/"+categoria
      return (
      <Route key={categoria} path={url} component={Videos} />
      )
    })

    return(
      <div>
      <Route exact path="/" component={Noticias} />
      {noticias}
      {videos}
      <Route path="/video/:id" component={VideoDetail} />
      <Route path="/noticia/:id" component={Noticia} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} />
      </div>
    )
  }
}

export default Routes