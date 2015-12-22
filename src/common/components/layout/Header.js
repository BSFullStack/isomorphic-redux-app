import React, { Component, PropTypes } from 'react';
import {
    Navbar ,
    Nav ,
    NavItem ,
    NavDropdown ,
    MenuItem ,
    Input ,
    Button
} from 'react-bootstrap';
export default class Header extends Component {
    render() {
        return (
            <Navbar inverse staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">在线书店</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">首页</NavItem>
                        <NavDropdown eventKey={3} title="文档" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>

                    <Navbar.Text pullRight>
                        <Navbar.Link href="#">登录</Navbar.Link>{ '  |  ' }<Navbar.Link href="#">注册</Navbar.Link>
                    </Navbar.Text>

                </Navbar.Collapse>

            </Navbar>
        );
    }
}

