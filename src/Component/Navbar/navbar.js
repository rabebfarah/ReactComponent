import React from "react"
import './navbar.css'
import {
        Navbar,
        Nav,
        NavDropdown,
       
       
      } from "react-bootstrap";


import logo from './../images/logo.png'

const Navigation=()=>{
return(
 
 
<Navbar className="Navbar">
<Navbar.Brand href="#logo" ><img src={(logo)}  alt="logo" style={{width:"100px", height:"100px"}}/></Navbar.Brand>
      <Nav.Link href="#HOME" className="HOME">HOME</Nav.Link>
      <Nav.Link href="#PROJECT" className="PROJECT">PROJECT</Nav.Link>
        <NavDropdown  title="CONTACT"  className="contact" > 
        <NavDropdown.Item href="#Facebook">Facebook</NavDropdown.Item>
        <NavDropdown.Item href="#Instagram">Instagram</NavDropdown.Item>
        <NavDropdown.Item href="#Linkdin">Linkdin</NavDropdown.Item>
        <NavDropdown.Item href="#E-mail">E-mail</NavDropdown.Item>
        <NavDropdown.Item href="#Mobile">Mobile</NavDropdown.Item>
        </NavDropdown>  
</Navbar>

);

}
export default Navigation