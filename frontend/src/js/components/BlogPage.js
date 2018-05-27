import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import cookie from 'react-cookies';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BlogEntry from'./BlogEntry';

class BlogPage extends Component {
    constructor() {
      super();
      this.state = {
          allblogs:[],
          blogs:[],
      };
      this.componentDidMount=this.componentDidMount.bind(this);
      this.filter=this.filter.bind(this);
    }

    componentDidMount(){
        let userData=cookie.load('userData');
        if(userData){
            this.setState({
                user:userData
              })
        }
        axios.get('http://54.37.8.167:8000/api/blogs').then((res)=>{
            this.setState({
                allblogs:res.data,
                blogs:res.data
            });
        }).catch((err)=>{
            console.log(err);
        })
    }

    filter(event){
        event.preventDefault();
        let value=event.target.value;
        if(value===''){
            this.setState({
                blogs:this.state.allblogs
            })
        }
        else{
            axios.get('http://localhost:8000/api/blogs/'+value).then((res)=>{
                this.setState({
                    blogs:res.data
                });
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
    
    render() { 
        const Newentrybutton=()=>{
            if(this.state.user){
                return(
                    <div> 
                        <button className="new-entry" ><Link id="newentry" to="/newentry">New entry</Link></button> 
                    </div>
                )
            }
            else{
                return(
                    <div> </div>
                )
            }
        }

        const Entries=this.state.blogs.map((entry)=>{
            return <BlogEntry key={entry.id} id={entry.id} title={entry.title} description={entry.description} />
          });
        return (
        <div className="video-player">
        <div className="filtros" >
        <h1>BlogPage</h1>
        <label className="filter-label" htmlFor='filtro'>Filtrar por Categoria</label>
        <select className="filtro" id="filtro" onChange={this.filter} >
            <option value="">Categoria</option>
            <option value="Boxeo">Boxeo</option>
            <option value="Kick-Boxing">Kick-Boxing</option>
            <option value="Karate">Karate</option>
        </select>
        <Newentrybutton />
        </div>
        {Entries}
        </div>
        );
        }
    }

export default BlogPage