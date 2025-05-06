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
} from "@mui/material";
import TopProductComponent from "./topproducts";

function ProductComponent() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pricesValue, setpricesValue] = useState(1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <CircularProgress sx={{ margin: "50px auto", display: "block" }} />;
  if (!product) return <Typography>Error loading product</Typography>;

  const onHandelInc = () => {
    setpricesValue((prev) => prev + 1);
  };
  
  const onHandelDec = () => {
    setpricesValue((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      <Container sx={{ mt: 2 }}>
        <Card
          sx={{
            padding: 1,
            display: "flex",
            gap: "10px",
            marginBottom: 2,
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{
              objectFit: "contain",
              height: 300,
              marginBottom: 2,
              width: "60%",
            }}
          />
          <CardContent>
            <Typography variant="h5" color="#1976D2" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              {product.description}
            </Typography>
            <div style={{ display: "flex", gap: "20px" }}>
              <Rating
                name={`rating-${product.id}`}
                value={product.rating.rate}
                precision={0.5}
                readOnly
                sx={{ fontSize: "1.3rem", color: "#FFC107" }}
              />
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                {product.rating.count} <AiFillLike />
              </Typography>
            </div>

            <Typography variant="h6" color="#1976D2">
              Discount: ₹{((product.price * 84.27) / 2).toFixed(2) * pricesValue}
            </Typography>
            <span>Exclusive Summer Sale (50% Off)</span>
            <Container
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Typography
                variant="span"
                sx={{ color: "#1976D2", fontWeight: "500" }}
              >
                Quality
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#007BFF",
                  color: "white",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  minWidth: "auto",
                  padding: "0",
                  fontSize: "18px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "#0056b3",
                  },
                }}
                onClick={onHandelDec}
              >
                -
              </Button>
              <span
                style={{ fontSize: "16px", fontWeight: "600", color: "#333" }}
              >
                {pricesValue}
              </span>
              <Button
                sx={{
                  backgroundColor: "#007BFF",
                  color: "white",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  minWidth: "auto",
                  padding: "0",
                  fontSize: "18px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "#0056b3",
                  },
                }}
                onClick={onHandelInc}
              >
                +
              </Button>
            </Container>
            <Button>Buy Now</Button>
          </CardContent>
        </Card>
      </Container>
      <TopProductComponent />
    </>
  );
}

export default ProductComponent;
