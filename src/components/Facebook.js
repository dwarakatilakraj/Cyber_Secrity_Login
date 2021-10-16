import { ThemeProvider } from '@shopify/polaris';
import React, { Component } from 'react'
import FacebookLogin from "react-facebook-login";
import  "./css/Facebook.css"

export default class Facebook extends Component {
    state = {
        isLogged:false,
        userId:"",
        name:"",
        picture:"",
        email:"",

    }
    responseFacebook= (response) =>{
        this.setState({isLogged:true,email:response.email,name:response.name, picture:response.picture});
        this.props.actions.getData(response);
    }
    componentClicked=()=>{
        console.log("componentClicked");
    }
    logout=()=>{
        
        this.setState({isLogged:false});
    }
    componentDidUpdate(){
      
        const data = {
            name:this.state.name,
            email:this.state.email,
            picture:this.state.picture,

        }
       
    }
    render() {
        let fbContent;
        if(this.state.isLogged){
            fbContent = (
            <div className = "facebook">
            <img src={this.state.picture.data.url} alt={this.state.name} />
              <h2 style={{color:"black"}}>Welcome:{this.state.name}</h2> <br />
               <span style={{color:"blue"}}>Contact Email: {this.state.email}</span>
              </div>

            );
            
        } else{
            fbContent = (
                <>
                <div className= "Heading">
                <h1>Welcome To The Application. Please Login To Continue.</h1>
            </div> 

        <div className = "Facebook">
               <FacebookLogin
                  appId="2996522770562900" 
                  autoLoad={false}
                  fields="name,email,picture"
                  onClick={()=>this.componentClicked()}
                  callback={(response)=>this.responseFacebook(response)} />
                    </div>
                    </>);
                
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
