import React from 'react'

export default function Navbar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <ul><a onClick={() => handlePage('About')}>Upcoming Events</a></ul>
                            <ul><a onClick={() => handlePage('Project')}></a></ul>
                            <ul><a onClick={() => handlePage('Contact')}>Contact</a></ul>
                            <ul><a onClick={() => handlePage('Resume')}>Resume</a></ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
