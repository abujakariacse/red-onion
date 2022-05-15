import React from 'react';
import './Header.css';
import logo2 from '../../../images/logo2.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img height={30} src={logo2} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link className='ms-2 fw-bold' as={Link} to='/' >
                                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                            </Nav.Link>
                            <Nav.Link className='ms-2 fw-bold' as={Link} to='/login'>Login</Nav.Link>
                            <Nav.Link className='ms-2 btn btn-danger text-light rounded-pill px-4' as={Link} to='/register'>Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;