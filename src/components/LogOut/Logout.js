import React, { Component } from 'react';

export default class LogOut extends Component {
  componentDidMount(){
   this.props.FacebookActions.logOut();
   this.props.history.push("/")
  }
 
 render(){
   return(<div>

   </div>)
 }
};
