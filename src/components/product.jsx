import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import {
  Container,
  Typography,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Button,
  Box,
} from "@mui/material";
import TopProductComponent from "./topproducts";

function ProductComponent() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch product:", err);
        setError("Failed to load product.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <CircularProgress sx={{ margin: "50px auto", display: "block" }} />;
  }

  if (error || !product) {
    return (
      <Typography color="error" variant="h6" align="center" sx={{ mt: 4 }}>
        {error || "Product not found"}
      </Typography>
    );
  }

  const discountPrice = ((product.price * 84.27) / 2).toFixed(2);

  return (
    <>
      <Container sx={{ mt: 4 }}>
        <Card
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 3,
            alignItems: "center",
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{
              objectFit: "contain",
              height: 300,
              width: { xs: "100%", sm: "40%" },
              borderRadius: 2,
              backgroundColor: "#f9f9f9",
            }}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h5" color="primary" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {product.description}
            </Typography>

            {product.rating && (
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
              >
                <Rating
                  value={product.rating.rate}
                  precision={0.5}
                  readOnly
                  sx={{ color: "#FFC107" }}
                />
                <Typography variant="body2">
                  {product.rating.count} <AiFillLike />
                </Typography>
              </Box>
            )}

            <Typography variant="h6" color="secondary">
              ₹{discountPrice}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              <em>Exclusive Summer Sale –  {product.rating.count < 100 ? "90%" : "30%"} Off!</em>
            </Typography>

            <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 2 }}>
              <Typography sx={{ fontWeight: 600 }}>Quality:</Typography>
              <Typography>
                {product.rating.count < 100 ? "😔 Low Rated" : "😀 Top Rated"}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>

      <TopProductComponent />
    </>
  );
}

export default ProductComponent;
