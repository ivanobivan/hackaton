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
                <Nav>
                    <NavItem eventKey={1}><Link to='/'>Contracts</Link></NavItem>
                    <NavItem eventKey={2}><Link to='/404'>Third Page</Link></NavItem>
                    <NavItem eventKey={2}><Link to='/lk'>Four Page</Link></NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>
                        {' '}
                        <Button type="submit">Submit</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
