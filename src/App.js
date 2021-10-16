import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TimeOutLayOut from "./components/TimeOut/TimeOutLayOut"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBarContainer';
import _ from 'lodash';
import LogOut from './components/About/About';
class App extends Component {
  constructor(props){
    super(props)
    this.data={}
}
  callBack=(data)=>{
    this.data=_.cloneDeep(data);
    this.forceUpdate();
  }
  
  render() {
    return (
      <div className="App">
       
        <NavBar callBack={(data)=>this.callBack(data)}/>
        {!_.isEmpty(this.data) && 
        <TimeOutLayOut data={this.data} />
        }
        <BrowserRouter>
        <Switch>
                
                    <Route path="/Logout" component={LogOut} />
                </Switch>
</BrowserRouter>        
      </div>
    );
  }
}

export default App;
