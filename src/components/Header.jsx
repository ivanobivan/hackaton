import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavItem,MenuItem,NavDropdown,FormGroup,FormControl,Button} from 'react-bootstrap'

export default class Header extends React.Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <img src='src/pic/queenfish.png' width="35" height="35" className='queenFish'/>
                    <Navbar.Brand>
                        <Link to='/'>Smart Rybinck</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem className='nav-item' href='/'>Contracts</NavItem>
                    <NavItem className='nav-item' href='/404'>Constructor of contracts</NavItem>
                    <NavItem className='nav-item' href='/lk'>Personal Area</NavItem>
                </Nav>
            </Navbar>
        )
    }
}
