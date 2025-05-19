import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function AboutUsComponent() {
  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Box sx={styles.heroSection}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={styles.heroTitle}>
              Welcome to BuyNxt - Your Ultimate Shopping Experience
            </Typography>
            <Typography variant="h6" sx={styles.heroSubtitle}>
              Discover a wide range of products, amazing deals, and more! At BuyNxt, we’re committed to bringing you the best shopping experience possible.
            </Typography>
            <Button variant="contained" sx={styles.startShoppingBtn} href="/products">
              Start Shopping Now
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box sx={styles.missionSection}>
        <Typography variant="h4" sx={styles.sectionTitle}>
          Our Mission
        </Typography>
        <Typography variant="body1" sx={styles.missionText}>
          At BuyNxt, our mission is to provide customers with a seamless shopping experience, offering top-quality products at competitive prices. We aim to empower our customers by providing a wide selection of products, excellent customer service, and fast delivery.
        </Typography>
      </Box>

      <Box sx={styles.valuesSection}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Box sx={styles.valueCard}>
              <AiOutlineShoppingCart style={styles.icon} />
              <Typography variant="h6" sx={styles.cardTitle}>
                Wide Selection
              </Typography>
              <Typography variant="body2" sx={styles.cardDescription}>
                We offer a diverse range of products, ensuring there’s something for everyone.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={styles.valueCard}>
              <AiOutlineShoppingCart style={styles.icon} />
              <Typography variant="h6" sx={styles.cardTitle}>
                Affordable Prices
              </Typography>
              <Typography variant="body2" sx={styles.cardDescription}>
                Our prices are competitive, ensuring you get the best value for your money.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={styles.valueCard}>
              <AiOutlineShoppingCart style={styles.icon} />
              <Typography variant="h6" sx={styles.cardTitle}>
                Fast Delivery
              </Typography>
              <Typography variant="body2" sx={styles.cardDescription}>
                Get your products delivered quickly with our reliable shipping partners.
              </Typography>
            </Box>
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
    backgroundColor: '#1976D2',
    color: 'white',
    padding: '60px 20px', // Increased padding to ensure text doesn't touch edges
    borderRadius: '8px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    marginBottom: '40px',
  },
  heroTitle: {
    fontWeight: '700',
    fontSize: '3rem',
    marginBottom: '20px',
    textAlign: 'left', // Ensure text aligns well
  },
  heroSubtitle: {
    fontWeight: '500',
    fontSize: '1.2rem',
    marginBottom: '30px',
    textAlign: 'left', // Ensures consistent left alignment
  },
  startShoppingBtn: {
    backgroundColor: '#1976D2',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '30px',
    padding: '12px 30px',
    '&:hover': {
      backgroundColor: '#1565C0',
    },
  },
  heroImage: {
    width: '100%',
    borderRadius: '8px',
  },
  missionSection: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  sectionTitle: {
    fontWeight: '700',
    color: '#1976D2',
    marginBottom: '15px',
  },
  missionText: {
    fontSize: '1rem',
    lineHeight: '1.8',
    color: '#555',
    fontWeight: '400',
  },
  valuesSection: {
    marginTop: '40px',
  },
  valueCard: {
    backgroundColor: '#fff',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  icon: {
    fontSize: '3rem',
    color: '#1976D2',
    marginBottom: '15px',
  },
  cardTitle: {
    fontWeight: '600',
    color: '#1976D2',
    marginBottom: '10px',
  },
  cardDescription: {
    fontSize: '0.9rem',
    color: '#666',
  },
};

export default AboutUsComponent;
