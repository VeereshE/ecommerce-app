import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import bannerData from '../data/bannerData.json';

function BannerComponent() {
  return (

    <Swiper
      spaceBetween={20}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      style={{ width: "100%", height: "500px"}}
    >
      {bannerData.map((banner, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              backgroundImage: `url(${banner.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                backgroundColor: 'rgba(0,0,0,0.4)',
                padding: { xs: 2, sm: 4 },
                borderRadius: 2,
                maxWidth: 600,
              }}
            >
              <Typography 
                variant="h3"
                sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '1.8rem', md: '3rem' } }}
              >
                {banner.title}
              </Typography>
              <Typography  variant="h6" sx={{ mb: 3 }}>
                {banner.subtitle}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={banner.ctaLink}
                style={buttonStyle}
              >
                {banner.ctaText}
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>

  );
  
}

const buttonStyle ={
  backgroundColor: "#007BFF",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  transition: "background-color 0.3s ease",
    
}

export default BannerComponent;
