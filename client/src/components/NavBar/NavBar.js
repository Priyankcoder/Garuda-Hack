import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container'

// import Navbar from 'react-bootstrap/Navbar'
export default function SimpleMenu() {
    return (
        <container>
            <Navbar bg="light"  expand="lg" fixed="top" >
                <Navbar.Brand href="#home" style = {{color: "blue"}}>Doctic</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: "blue" }}/>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto" >
                        <Nav.Link href="/"><img src="https://img.icons8.com/material-outlined/24/000000/combo-chart.png" />&nbsp;&nbsp;Covid Data</Nav.Link>
                        <Nav.Link href="/news"><img src="https://img.icons8.com/android/24/000000/news.png" />&nbsp;&nbsp;News</Nav.Link>
                        <Nav.Link href="/qna"><img src="https://img.icons8.com/ios-glyphs/30/000000/consultation.png" />&nbsp;QnA</Nav.Link>
                        <Nav.Link href="/ask"><img src="https://img.icons8.com/material-sharp/24/000000/ask-question.png" />&nbsp;&nbsp;Ask a Ques</Nav.Link>
                        {/* <Nav.Link href="/appointments"><img src="https://img.icons8.com/material/24/000000/filled-appointment-reminders.png" />&nbsp;&nbsp;My Appointments</Nav.Link> */}
                        {/* <Nav.Link href="/service"><img src="https://img.icons8.com/android/24/000000/stethoscope.png" />&nbsp;&nbsp;Service</Nav.Link> */}
                        {/* <Nav.Link href="/profile"><img src="https://img.icons8.com/ios-glyphs/30/000000/test-account.png" />Profile</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </container>
    )
}

