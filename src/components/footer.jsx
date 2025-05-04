import { Link } from "@mui/material";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const paymentLogos = [
  {
    name: "Visa",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
  },
  {
    name: "MasterCard",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  },
  {
    name: "PhonePe",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f0/PhonePe_Logo.svg",
  },
  {
    name: "Google Pay",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Pay_Logo.svg",
  },
  {
    name: "Paytm",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Paytm_logo.png",
  },
];

function FooterComponent() {
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmitForm = () => {
    if (validateEmail(email)) {
      toast.success("Subscribed! Thank you 😊", {
        position: "top-right",
      });
    } else {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
      });
    }
  };
  return (
    <Container fluid style={footerContainer}>
      <Container style={footerContent}>
        <Container style={newsletterStyle}>
          <p style={{ marginBottom: "8px", fontWeight: 600 }}>
            Subscribe to our Newsletter
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </form>
          <button style={subscribeButton} onClick={onSubmitForm}>
            Subscribe
          </button>
          <ToastContainer />
        </Container>
        <Container style={linkSection}>
          <a href="/about" style={linkStyle}>
            About Us
          </a>
          <a href="/contact" style={linkStyle}>
            Contact Us
          </a>
          <a href="/support" style={linkStyle}>
            Support
          </a>
          <a href="/privacy" style={linkStyle}>
            Privacy Policy
          </a>
        </Container>

        <Container style={socialSection}>
          <Container>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              style={iconLink}
            >
              <FaFacebookF />
            </Link>
          </Container>

          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            style={iconLink}
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            style={iconLink}
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            style={iconLink}
          >
            <FaLinkedinIn />
          </Link>
        </Container>

        <Container style={paymentSection}>
          <p style={{ marginBottom: "8px", fontWeight: 600 }}>We Accept</p>
          <Container style={paymentIcons}>
            {paymentLogos.map((payment) => (
              <img
                key={payment.name}
                src={payment.src}
                alt={payment.name}
                style={paymentIconStyle}
              />
            ))}
          </Container>
        </Container>
      </Container>

      <p style={footerNote}>
        © {new Date().getFullYear()} BuyNxt. All rights reserved.
      </p>
    </Container>
  );
}

const footerContainer = {
  backgroundColor: "#1976D2",
  color: "white",
  padding: "30px 10%",
  textAlign: "center",
};

const footerContent = {
  display: "flex",
  flexDirection: "row", // row layout
  flexWrap: "wrap", // allows wrapping to the next line
  gap: "20px", // spacing between items
  alignItems: "center",
  justifyContent: "center",
};

const linkSection = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: 500,
};

const socialSection = {
  display: "flex",
  gap: "16px",
};

const iconLink = {
  color: "white",
  fontSize: "1.2rem",
  textDecoration: "none",
};

const paymentSection = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const paymentIcons = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  justifyContent: "center",
  marginTop: "6px",
};

const paymentIconStyle = {
  height: "32px",
  objectFit: "contain",
};

const footerNote = {
  marginTop: "20px",
  fontSize: "0.9rem",
  opacity: 0.8,
};

const newsletterStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
};

const inputStyle = {
  padding: "8px 12px",
  borderRadius: "4px",
  border: "none",
  fontSize: "1rem",
  width: "250px",
};

const subscribeButton = {
  padding: "8px 16px",
  backgroundColor: "#fff",
  color: "#1976D2",
  border: "none",
  borderRadius: "4px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default FooterComponent;
