import React from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";

function ContactComponent() {
  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Box sx={styles.heroSection}>
        <Typography variant="h3" sx={styles.heroTitle}>
          Get in Touch with Us
        </Typography>
        <Typography variant="h6" sx={styles.heroSubtitle}>
          Have any questions, concerns, or feedback? We’re here to help! Whether
          you're looking for assistance with a recent order, need information
          about our products, or simply want to give us feedback, we're just a
          message away.
        </Typography>
        <Typography variant="body1" sx={styles.heroDescription}>
          Our customer support team is dedicated to providing you with the best
          service possible. Let us know how we can assist you, and we’ll make
          sure to respond as quickly as possible. Your satisfaction is our top
          priority.
        </Typography>
        <Typography variant="body1" sx={styles.heroCallToAction}>
          Don’t hesitate to reach out to us. We’re always eager to hear from you
          and improve your experience with us.
        </Typography>
      </Box>
      <Box sx={styles.formSection}>
        <Grid container spacing={4}>
          {/* Left Section - Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper sx={styles.paper}>
              <Typography variant="h6" sx={styles.formTitle}>
                Send us a Message
              </Typography>

              <TextField
                label="Your Name"
                fullWidth
                variant="outlined"
                sx={styles.inputField}
                placeholder="Enter your full name"
              />
              <TextField
                label="Your Email"
                fullWidth
                variant="outlined"
                sx={styles.inputField}
                placeholder="Enter your email"
              />
              <TextField
                label="Subject"
                fullWidth
                variant="outlined"
                sx={styles.inputField}
                placeholder="Enter the subject"
              />
              <TextField
                label="Message"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                sx={styles.inputField}
                placeholder="Write your message here"
              />

              <Button variant="contained" sx={styles.submitButton}>
                Send Message
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper sx={styles.paper}>
              <Typography variant="h6" sx={styles.formTitle}>
                Contact Information
              </Typography>

              <Typography sx={styles.contactInfo}>
                <strong>Email:</strong> support@buynxt.com
              </Typography>
              <Typography sx={styles.contactInfo}>
                <strong>Phone:</strong> +1 (800) 123-4567
              </Typography>
              <Typography sx={styles.contactInfo}>
                <strong>Address:</strong> 123 BuyNxt Street, E-commerce City,
                USA
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

const styles = {
  container: {
   padding: '5px 0',
    backgroundColor: '#f5f5f5',
    borderRadius: '2px',
    boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.1)',
    marginBottom: '40px',
    paddingBottom: '20px',
   
  },
  heroSection: {
    backgroundColor: "#1976D2",
    color: "white",
    padding: "60px 20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    marginBottom: "40px",
    textAlign: "center",
  
  },
  heroTitle: {
    fontWeight: "700",
    fontSize: "3rem",
    marginBottom: "15px",
  },
  heroSubtitle: {
    fontWeight: "500",
    fontSize: "1.2rem",
    marginBottom: "30px",
  },
  formSection: {
    marginTop: "40px",
  },
  paper: {
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  formTitle: {
    fontWeight: "700",
    color: "#1976D2",
    marginBottom: "15px",
  },
  inputField: {
    marginBottom: "20px",
  },
  submitButton: {
    backgroundColor: "#1976D2",
    color: "white",
    padding: "12px 30px",
    borderRadius: "30px",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#1565C0",
    },
    marginTop: "15px",
  },
  contactInfo: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "15px",
  },
};

export default ContactComponent;
