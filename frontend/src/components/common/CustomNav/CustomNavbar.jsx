import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { GiHairStrands } from 'react-icons/gi';

const CustomNavbar = () => {
  const navigate = useNavigate();

  // Simulated authentication state (replace with real auth logic)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Check if user is logged in (e.g., from sessionStorage or an API)
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (true) {
      setIsAuthenticated(true);
      // Replace with real user data and image URL
      setUser({
        name: "John Doe",
        email: "johndoe@example.com",
        profileImage: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250", // Example placeholder image
      });
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    navigate("/login");
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      style={{ background: "linear-gradient(90deg, #ff7e5f, #feb47b)" }}
    >
      <Container>
        {/* Logo on the Left */}
        <Navbar.Brand as={Link} to="/">
          <GiHairStrands style={{ fontSize: "2rem" }} className="me-3" />EasyGrooming
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="cool-navbar" />
        <Navbar.Collapse id="cool-navbar">
          {/* Center Navigation Links */}
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>

          {/* Profile Section */}
          {isAuthenticated && user ? (
            <Nav>
              <NavDropdown
                title={
                  <span>
                    <img
                      src={user.profileImage}
                      alt="profile"
                      className="rounded-circle me-2"
                      style={{ width: "30px", height: "30px" }}
                    />
                    {user.name}
                  </span>
                }
                id="profile-dropdown"
                align="end"
              >
                <NavDropdown.Item as={Link} to="/profile">
                  My Account
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Button as={Link} to="/login" variant="light" className="ms-3">
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
