import React, { Component } from 'react';
import _ from 'lodash';
import { Spinner} from 'react-bootstrap'
import "../css/About.css"

export default class LogOut extends Component {
  componentDidMount(){
      this.props.actions.loadData();
   this.props.actions.getData();
  
  }
  renderJsonData=()=>{
     let cmp = {};
   cmp = !_.isEmpty(this.props.data) &&  this.props.data.map((item) =>{
       
        return(<div>
          <h1  style={{color:"black", margin:"20px"}}>For Support, Please Contact:</h1>
            <span  style={{color:"blue", margin:"10px"}}>Name:{item.name.title+"."+item.name.first+" "+item.name.last}</span> <br />
            <span  style={{color:"blue", margin:"10px"}}>Email:{item.email}</span><br />
            <span  style={{color:"blue", margin:"10px"}}>Mobile:{item.cell}</span><br />

        </div>)

      })
      return cmp
  }
 
 render(){
   return(
   <div className = "Loading">
       {this.props.loading? 
   
   <Spinner animation="border" role="status">
   <span className="visually-hidden">Loading...</span>
 </Spinner> :
       <div>{this.renderJsonData()}</div>
 }
   </div>)
 }
};
