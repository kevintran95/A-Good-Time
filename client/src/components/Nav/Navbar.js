import { Navbar, Container, Nav } from 'react-bootstrap'
import {
    Link
} from "react-router-dom";
import Auth from '../../utils/auth';

export default function NavbarOne() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/schedule-event">Schedule Event</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                            <li>
                                <button onClick={logout}>Logout</button>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
