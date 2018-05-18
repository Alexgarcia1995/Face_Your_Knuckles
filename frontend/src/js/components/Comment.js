import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'

class Comment extends Component {
    constructor(props) {
      super(props);
      this.state = {
        comment:props.comment,
        user_id:props.user_id,
        username:""
      };
      this.componentDidMount=this.componentDidMount.bind(this);
    }

    componentDidMount(){
    let that=this;
    axios.get("http://localhost:8000/api/user/"+this.state.user_id).then(function(response){
            that.setState({
                username: response.data[0].name,
            })
        }).catch( function(e) {
            console.log(e);
    })
    }
    
    render() { 
        return (
        <div>
        <h3>{this.state.username}</h3>
        <p>{this.state.comment}</p>
        </div>
        );
        }
    }

export default Comment