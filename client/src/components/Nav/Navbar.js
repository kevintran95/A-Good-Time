import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from "react-router-dom";
import Auth from '../../utils/auth';
import '../../styles/NavBar.css';
import logo from '../../assets/agoodtimeLogo.png'

export default function NavbarOne() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <div> {
            Auth.loggedIn() ? (
                <div className="top-menu">
                    <h1 className="logo">
                        <img src={logo} alt="logo"></img>
                    </h1>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto" style={{color: "black"}}>
                                    <li>
                                        <Link className="color" to="/">Home</Link>
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
                </div>
            ) : (
                <div className="top-menu">
                    <h1 className="logo">
                        <img src={logo} alt="logo"></img>
                    </h1>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto" style={{color: "black"}}>
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
                </div>
            )
        } </div>

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
