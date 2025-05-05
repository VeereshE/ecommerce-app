import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

import TopProductComponent from "./topproducts";
import RatingComponent from "./rating";

const bannerData = [
  {
    title: "Welcome to Our Store!",
    subtitle: "Discover the latest trends and exclusive deals.",
    image:
      "https://res.cloudinary.com/dgvec2ipx/image/upload/v1746457848/t6dzjzqdhd9dbrjvfl7y.jpg",
    ctaText: "Shop Now",
    ctaLink: "/products",
    altText: "New arrivals in store",
    description:
      "Get ready to shop the most exciting and stylish collection of products at unbeatable prices! Whether you're looking for the perfect outfit, tech gadget, or home decor, we've got something for everyone. Explore our new arrivals and find your next favorite item with just a few clicks.",
  },
  {
    title: "New Collection is Here",
    subtitle: "Fresh styles and bold looks.",
    image:
      "https://res.cloudinary.com/dgvec2ipx/image/upload/v1746457848/bxqk04qg7uejabw0k5fn.jpg",
    ctaText: "View Collection",
    ctaLink: "/products",
    altText: "Latest fashion collection",
    description:
      "Unveil your bold side with our new fashion collection. Featuring fresh styles, vibrant colors, and trendsetting looks, this collection is all about making a statement. Whether you're dressing up for a night out or looking for casual chic, you'll find the perfect pieces here to elevate your wardrobe.",
  },
  {
    title: "Exclusive Summer Sale",
    subtitle: "Up to 50% off on selected items.",
    image:
      "https://res.cloudinary.com/dgvec2ipx/image/upload/v1746457848/hnfocamei4oyipf3kpax.jpg",
    ctaText: "Explore Deals",
    ctaLink: "/products",
    altText: "Summer sale collection",
    description:
      "Don't miss out on our exclusive summer sale! Enjoy up to 50% off on selected items, from trendy apparel to must-have accessories. Shop now and grab your favorite pieces before they’re gone. It's the perfect time to refresh your wardrobe at unbeatable prices!",
  },
];

function BannerComponent() {
  return (
    <>
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
        style={{ width: "100%", height: "500px" }}
      >
        {bannerData.map((banner, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                backgroundImage: `url(${banner.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                display: "flex",
                gap: "2px",
                color: "#fff",
                textAlign: "center",
                position: "relative",
                flexDirection: index % 2 !== 0 ? "row-reverse" : "row", 
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  maxWidth: "600px", // Limiting content width to avoid overcrowding
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    fontSize: { xs: "1.8rem", md: "3rem" },
                  }}
                >
                  {banner.title}
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  {banner.subtitle}
                </Typography>
                <Typography
                  variant="span"
                  style={{
                    marginBottom: "16px",
                    textAlign: "center",
                    maxWidth: "80%",
                    wordWrap: "break-word",
                    display: "block",
                    margin: "0 auto",
                  }}
                >
                  {banner.description}
                </Typography>
                <Container>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={banner.ctaLink}
                    style={buttonStyle}
                  >
                    {banner.ctaText}
                  </Button>
                </Container>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <TopProductComponent />
      <RatingComponent />
    </>
  );
}

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

export default BannerComponent;
