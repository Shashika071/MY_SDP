import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

import { Button, Container, Form, Modal, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';

import { assest } from '../../assest/assest';
import axios from 'axios';

const CustomNavbar = ({ isHomePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (path) => {
    if (path.startsWith("#")) {
      window.location.href = path;
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAuthFormSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:4000/api/user/login', { email, password });
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        setIsAuthenticated(true);
        closeModal();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("Login failed. Please try again.");
    }
  };

  const handleSignup = async (name, email, password, tel_num) => {
    try {
      const response = await axios.post('http://localhost:4000/api/user/register', { name, email, password, tel_num });
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        setIsAuthenticated(true);
        closeModal();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("Signup failed. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (isLogin) {
      handleLogin(email, password);
    } else {
      const name = e.target.name.value;
      const tel_num = e.target.tel_num.value;
      handleSignup(name, email, password, tel_num);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setIsDropdownOpen(false);
    navigate('/');
  };

  return (
    <>
      <Navbar
        bg={scrolling || !isHomePage ? 'dark' : 'transparent'}
        variant="dark"
        expand="lg"
        className="custom-navbar fixed-top"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src={assest.logo}
              width="60"
              height="50"
              alt="Logo"
              style={{ borderRadius: '50%', marginRight: '10px' }}
            />
            <span className="navbar-brand-text">Phoenix Education</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse id="basic-navbar-nav" in={isMenuOpen}>
            <Nav className="mx-auto custom-nav">
              <Nav.Link onClick={() => handleLinkClick('/')}>Home</Nav.Link>
              <Nav.Link onClick={() => handleLinkClick('/articles')}>Tours</Nav.Link>
              <Nav.Link onClick={() => handleLinkClick('#footer')}>Contact</Nav.Link>
              <Nav.Link onClick={() => handleLinkClick('#about')}>About</Nav.Link>
            </Nav>

            {!isAuthenticated && (
              <Button variant="outline-light" onClick={handleButtonClick}>
                Login / Sign Up
              </Button>
            )}
            {isAuthenticated && (
              <div className="image-container">
                <img
                  className="btn-e-magazine-ms-lg-3"
                  src={assest.td}
                  alt="Profile"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                />
                <div ref={dropdownRef} className={`dropdown-menu-custom ${isDropdownOpen ? 'show' : ''}`}>
                  <div className="dropdown-item" onClick={() => navigate('/profile')}>
                    My Profile
                  </div>
                  <div className="dropdown-item" onClick={() => navigate('/orders')}>
                    My Tours
                  </div>
                  <div className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {isMenuOpen && <div className="overlay" onClick={handleToggle}></div>}

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isLogin ? 'Login' : 'Sign Up'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {!isLogin && (
              <Form.Group controlId="formName">
                <Form.Control type="text" name="name" placeholder="Enter your name" required />
              </Form.Group>
            )}
            <Form.Group controlId="formEmail">
              <Form.Control type="email" name="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control type="password" name="password" placeholder="Enter your password" required />
            </Form.Group>
            {!isLogin && (
              <Form.Group controlId="formTelNum">
                <Form.Control type="tel" name="tel_num" placeholder="Enter your phone number" required />
              </Form.Group>
            )}
            <Button variant="primary" type="submit" block>
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
            <div className="text-center">
              <span onClick={handleAuthFormSwitch} className="switch-form-link">
                {isLogin ? 'New here? Sign up' : 'Already have an account? Log in'}
              </span>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomNavbar;