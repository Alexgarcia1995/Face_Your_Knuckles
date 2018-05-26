import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'
import cookie from 'react-cookies';
import Comment from './Comment';

class EntryDetail extends Component {
    constructor() {
      super();
      this.state = {
        entryid: window.location.pathname.split("/")[2],
        userid:"",
        title:"",
        description:"",
        comments:[]
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
            window.location.replace('/blogs/entry/'+this.state.entryid);
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

          axios.get("http://localhost:8000/api/comments/"+this.state.entryid).then(function(response){
          that.setState({
                comments: response.data,
            })
          }).catch( function(e) {
            console.log(e);
          });
    }
    
    render() { 
        const CommentForm=()=>{
            if (this.state.userid!==""){
                return (
                    <form onSubmit={this.sendComment} >
                        <textarea id="comment" name="comment"/><br/>
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

        const comments=this.state.comments.map((entry_comment)=>{
            return <Comment key={entry_comment.id} comment={entry_comment.comment} user_id={entry_comment.user_id}/>
        })
        return (
        <div className="video-player">
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        {comments}
        <CommentForm />
        </div>
        );
        }
    }

export default EntryDetail