import { Navbar, Container, Nav } from 'react-bootstrap'

export default function NavbarOne() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <ul>Upcoming Events</ul>
                            <ul>Calendar</ul>
                            <ul>Good Time</ul>
                            <ul>Great Time</ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
