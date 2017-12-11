import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

export default class Header extends React.Component {

    render() {
        return (
            <Navbar >
                <Nav pullLeft>
                    <NavItem><Link to='/'><span className='navigatorMenu'>Home</span></Link></NavItem>
                    <NavItem><Link to='/404'><span className='navigatorMenu'>Error</span></Link></NavItem>
                    <NavItem><Link to='/lk'><span className='navigatorMenu'>Personal Area</span></Link></NavItem>
                </Nav>
            </Navbar>


        )
    }
}
