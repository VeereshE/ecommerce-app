import {
  Container,
  Typography,
  Rating,
  Box,
  Paper,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

function RatingComponent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((product) => product.rating.rate > 3.5);
        setProducts(filtered);
        setLoading(false); // Stop loading after fetch
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Stop loading on error
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        if (
          scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollBy({ left: 2, behavior: "smooth" });
        }
      }
    }, 1);

    return () => clearInterval(interval); 
  }, []);

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        align="left"
        color="primary"
        sx={{ fontWeight: "bold" }}
      >
        Rated Products
      </Typography>

      {loading ? (
        <CircularProgress sx={{ display: "block", margin: "20px auto" }} />
      ) : (
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
            gap: 2,
            pb: 2,
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
            "&::-webkit-scrollbar": {
              display: "none", // Chrome, Safari
            },
          }}
        >
          {products.map((product) => (
            <Paper
              key={product.id}
              sx={{
                minWidth: 300,
                width: 250,
                p: 2,
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.title}
                sx={{
                  width: "100%",
                  height: 180,
                  objectFit: "contain",
                  mb: 1,
                }}
              />

              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                {product.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  color: "#555",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {product.description}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Rating
                  name={`rating-${product.id}`}
                  value={product.rating.rate}
                  precision={0.5}
                  readOnly
                  sx={{ fontSize: "1.3rem", color: "#FFC107" }}
                />
                <Typography sx={{ fontSize: "0.9rem", color: "#666" }}>
                  ({product.rating.rate})
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      )}
    </Container>
  );
}

export default RatingComponent;
