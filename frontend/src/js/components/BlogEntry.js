import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import { Link } from "react-router-dom";

class BlogEntry extends Component {
  constructor(props) {
    super(props);
    this.state={
      idEntry:props.id,
      title:props.title,
      description:props.description,
    }
  }

  render() {
    const link="/entry/"+this.state.idEntry;
    return( 
      <article className="post-container">
      <div className="post-content">
      <Link to={link}>{this.state.title}</Link>
      <p>{this.state.description.split('\n')[0]}</p>
      <Link to={link}>Read More</Link>
      </div>
      </article>
    )
  }

}
export default BlogEntry
