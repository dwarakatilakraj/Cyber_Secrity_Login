import React from 'react'
import { withRouter } from 'react-router-dom'
import IdleTimer from 'react-idle-timer';
import { TimeOutModal } from './TimeOutModal'
import * as Actions from '../FacebookActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/TimeOut.css"


class TimeOutLayOut extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            timeout:1000 * 59 * 1,
            showModal: false,
            userLoggedIn: false,
            isTimedOut: false
        }

        this.idleTimer = null
        this.onAction = this._onAction.bind(this)
        this.onActive = this._onActive.bind(this)
        this.onIdle = this._onIdle.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    _onAction(e) {
      this.setState({isTimedOut: false})
    }
   
    _onActive(e) {
      this.setState({isTimedOut: false})
    }
   
    _onIdle(e) {
      const isTimedOut = this.state.isTimedOut
      if (isTimedOut) {
        this.props.history.push("/")
        window.location.reload(true);
      } else {
        this.setState({showModal: true})
        this.idleTimer.reset();
        this.setState({isTimedOut: true})
      }
      
    }

    handleClose() {
      this.setState({showModal: false})
    }

    handleLogout() {
      this.setState({showModal: false})
      this.props.history.push("/")
      window.location.reload(true);
    }

    render(){
      return(
        <>
          <IdleTimer
            ref={ref => { this.idleTimer = ref }}
            element={document}
            onActive={this.onActive}
            onIdle={this.onIdle}
            onAction={this.onAction}
            debounce={250}
            timeout={this.state.timeout} />

            <div className="">
              
                
                <TimeOutModal 
                    showModal={this.state.showModal} 
                    handleClose={this.handleClose}
                    handleLogout={this.handleLogout}
                />
            </div>
        </>
      )
   }

 }

 

export default withRouter(TimeOutLayOut)