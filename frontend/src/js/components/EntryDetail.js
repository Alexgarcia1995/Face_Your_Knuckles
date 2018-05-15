import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'
import cookie from 'react-cookies';

class EntryDetail extends Component {
    constructor() {
      super();
      this.state = {
        entryid: window.location.pathname.split("/")[2],
        userid:"",
        title:"",
        description:""
      };
      this.componentDidMount=this.componentDidMount.bind(this);
      this.sendComment=this.sendComment.bind(this);
    }

    sendComment(event){
        event.preventDefault();
        let comment=event.target[0].value;
        let entry_id=this.state.entryid;
        let user_id=this.state.userid;
        axios.post("http://54.37.8.167:8000/api/newcomment",{
        comment,
        entry_id,
        user_id
        })
        .then(response=> {
            console.log(response)
          //window.location.replace('/blogs')
        })
        .catch(error=> {
            console.log(error);
        });
    }

    componentDidMount(){
        let userData=cookie.load('userData');
        if(userData){
            this.setState({
                userid:userData.id
              })
        }
        let that=this;
        axios.get("http://54.37.8.167:8000/api/entry/"+this.state.entryid).then(function(response){
            that.setState({
                title: response.data[0].title,
                description:response.data[0].description
            })
          }).catch( function(e) {
            console.log(e);
          })
    }
    
    render() { 
        const CommentForm=()=>{
            if (this.state.userid!==""){
                return (
                    <form onSubmit={this.sendComment} >
                        <textarea id="comment" name="comment"/>
                        <button type="submit" >Send Comment</button> 
                    </form>
                )
            }
            else{
                return(
                    <div> 
                        <p>Para dejar un comentario debes iniciar sesion</p>
                    </div>
                )
            }
        }
        return (
        <div className="video-player">
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <CommentForm />
        </div>
        );
        }
    }

export default EntryDetail