import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { FaGripLines } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Nav from "react-bootstrap/Nav";
import { FaCartArrowDown } from "react-icons/fa";
import { AiFillAlipayCircle } from "react-icons/ai";
import { FaShopify } from "react-icons/fa";
import { TbLogs } from "react-icons/tb";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isMobileNavbar, setIsMobileNavbar] = useState(false);

  const handleClickSideNavbar = () => {
    setIsMobileNavbar((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsLaptop(window.innerWidth >= 769);
      setIsMobileNavbar(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#B0E0E6",
          padding: "18px 24px",
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.05)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Container fluid style={containerStyle}>
          <Navbar.Brand
            href="/"
            style={{
              fontWeight: "700",
              display: "flex",            
              alignItems: "center",
              color: "#1976D2",
              fontSize: "1.6rem",
              flexShrink: 0,
              marginRight: "5rem",
              textDecoration: "none",
              paddingLeft: "2px",
              gap:"5px"
            }}
          >
            <AiFillAlipayCircle
              style={{
                fontSize: "2.5rem",
                color: "#1976D2",
                bottom:"10px"
              }}
            />
            BuyNxt
          </Navbar.Brand>
          {isMobile && (
            <Navbar.Toggle
              aria-controls="navbarScroll"
              style={buttonStyleToggle}
              className="d-md-none"
              onClick={handleClickSideNavbar}
            >
              {isMobileNavbar ? <FaGripLines /> : <RxCross2 />}
            </Navbar.Toggle>
          )}
          {isLaptop && (
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                <Nav.Link href="/products" style={navLinkStyle}>
                  <FaShopify /> Products
                </Nav.Link>

                <Nav.Link href="/cart" style={navLinkStyle}>
                  <FaCartArrowDown /> Cart
                </Nav.Link>
                <Nav.Link href="/blogs" style={navLinkStyle}>
                  <TbLogs /> Blogs
                </Nav.Link>
                <Nav.Link href="/signin" style={navLinkStyle}>
                  <Button style={buttonStyle}>Sign In </Button>{" "}
                </Nav.Link>
                <Nav.Link href="/login" style={navLinkStyle}>
                  <Button style={buttonStyle}>Log In </Button>{" "}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
      {isMobileNavbar ||
        (isMobile && (
          <Container style={containerStylePopUp}>
            <Nav.Link href="/products" style={navLinkStyle}>
              <FaShopify /> Products
            </Nav.Link>
            <Nav.Link href="/cart" style={navLinkStyle}>
              <FaCartArrowDown /> Cart
            </Nav.Link>
            <Nav.Link href="/blogs" style={navLinkStyle}>
              <TbLogs /> Blogs
            </Nav.Link>
            <Nav.Link href="/signin" style={navLinkStyle}>
              <Button style={buttonStyle}>Sign In </Button>{" "}
            </Nav.Link>
            <Nav.Link href="/login" style={navLinkStyle}>
              <Button style={buttonStyle}>Log In </Button>{" "}
            </Nav.Link>
          </Container>
        ))}
    </>
  );
}

const navLinkStyle = {
  color: "#1976D2",
  fontWeight: 700,
  fontSize: "1rem",
  textDecoration: "none",
  transition: "color 0.2s ease-in-out",
  cursor: "pointer",
};

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
};

const buttonStyle = {
  backgroundColor: "#007BFF",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  transition: "background-color 0.3s ease",
};

const buttonStyleToggle = {
  backgroundColor: "#007BFF",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  transition: "background-color 0.3s ease",
};

const containerStylePopUp = {
  backgroundColor: "#fff",
  display: "flex",
  gap: "10px",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  margin: "20px",
  height: "100%",
  opacity: 1,
  transform: "translateY(0)",
  transition: "all 0.4s ease",
};

// const hiddenStyle = {
//   opacity: 0,
//   transform: "translateY(-20px)",
//   pointerEvents: "none",
// };

export default NavbarComponent;
