import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Noticias from './Noticias';
import Videos from './Videos';
import VideoDetail from "./VideoDetail";
import Noticia from "./Noticia";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import BlogPage from "./BlogPage";
import NewBlogEntry from "./NewBlogEntry";
import EntryDetail from './EntryDetail';
import ModifyUser from './ModifyUser';


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
      <Route path="/login/" component={Login} />
      <Route path="/register/" component={Register} />
      <Route path="/profile/" component={Profile} />
      <Route path="/blogs/" component={BlogPage} />
      <Route path="/newentry/" component={NewBlogEntry} />
      <Route path="/entry/:id" component={EntryDetail} />
      <Route path="/modifyuser/" component={ModifyUser} />
      </div>
    )
  }
}

export default Routes