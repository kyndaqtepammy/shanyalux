import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/img/logo2.png';

const Styles = styled.div`
    .navbar {
        background-color: #fff;
        padding: 1px;
    }

    nav li {
       display: inline-block;
       text-align:center; 
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #390040;
        font-family: 'Roboto', sans-serif;
        text-transform: uppercase;
        font-weight: 900;

        &:hover {
            color: #F7717D;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand = "lg">
            <Navbar.Brand href = "/"><img src={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav"  style={{color:"white"}}>
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/bookings">Bookings</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/bus-hire">Bus Hire</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact Us</Nav.Link></Nav.Item>
                    {/* <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)