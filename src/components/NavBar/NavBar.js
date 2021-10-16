import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import About from '../About/AboutContainer'
import Info from '../Info'
import Facebook from '../FacebookContainer'
import LogOut from '../LogOut/LogOutContainer'
import _ from 'lodash';
export default class NavBar extends Component {

shouldComponentUpdate(nextProps) {
    if(this.props.data !== nextProps.data){
    !_.isEmpty(nextProps) && this.props.callBack(nextProps.data);
    }
    return true;
 }

    render() {
        let title = "Signed In As:"+ " "+this.props.name;
        return (
            <div>
                
            <BrowserRouter>
            {this.props.name &&
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle />
                       
                        <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to={"/Contact"}>Contact</Nav.Link>
                            <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
                            <NavDropdown title={title} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">LogOut</NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Collapse>
    
                    </Container>
                </Navbar>
    }
                <Switch>
                <Route exact path='/' component={Facebook} />
                    <Route path="/Contact"> <About/> </Route>
                    <Route path="/Logout" component={LogOut} />
                    <Route path='/About' component={Info}></Route>
                </Switch>
                </BrowserRouter>
                
            </div>
        )
    }
}
