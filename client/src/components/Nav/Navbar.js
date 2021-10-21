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
            {Auth.loggedIn() ? (
                <>
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
                                        <Link to="/upcoming-events">Upcoming Events</Link>
                                    </li>
                                    <li>
                                        <button onClick={logout}>Logout</button>
                                    </li>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </>
            ) : (
                <>
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
                                        <Link to="/upcoming-events">Upcoming Events</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/signup">Signup</Link>
                                    </li>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </>
            )}
        </div>

        // <Navbar bg="light" expand="lg">
        // <Container>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="me-auto">
        //             <li>
        //                 <Link to="/">Home</Link>
        //             </li>
        //             <li>
        //                 <Link to="/schedule-event">Schedule Event</Link>
        //             </li>
        //             <li>
        //                 <Link to="/login">Login</Link>
        //             </li>
        //             <li>
        //                 <Link to="/signup">Sign Up</Link>
        //             </li>
        //             <li>
        //                 <button onClick={logout}>Logout</button>
        //             </li>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Container>
        // </Navbar>

    )
}
