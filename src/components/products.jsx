import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment } from "../store/Slices/index";

const items = [
  "All",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

function ProductsComponent() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const addToCart = (product) => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(increment(product));
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        navigate("/login");
      }, 400);
    }
  };

  const onHandleViewMore = (id) => {
    navigate(`/products/${id}`);
  };

  const fetchProducts = (category) => {
    setLoading(true);
    const url =
      category === "All"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${encodeURIComponent(
            category
          )}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts("All");
  }, []);

  return (
    <>
      <Container sx={{ mt: 4 }}>
        <Container
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            padding: "20px 0",
          }}
        >
          {items.map((item, index) => (
            <Button
              key={index}
              style={{
                backgroundColor: "#1976D2",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => fetchProducts(item)}
            >
              {item}
            </Button>
          ))}
        </Container>

        {/* Loader or Product Grid */}
        {loading ? (
          <CircularProgress sx={{ display: "block", margin: "0 auto" }} />
        ) : (
          <Grid
            container
            spacing={3}
            sx={{
              margin: "20px 0",
            }}
          >
            {products.map((product) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={product.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                    width: "auto",
                    maxWidth: "350px",
                    boxShadow: 3,
                    borderRadius: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: "contain", width: "50%", padding: 3 }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography
                      color="#1976D2"
                      variant="subtitle1"
                      sx={{ fontWeight: 500 }}
                    >
                      {product.title}
                    </Typography>
                    <Container
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "7px",
                        mt: 1,
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="#1976D2"
                        sx={{ textDecoration: "line-through" }}
                      >
                        Price: ₹{(product.price * 84.27).toFixed(2)}
                      </Typography>
                      <Typography variant="body2" color="#1976D2">
                        Discount: ₹{((product.price * 84.27) / 2).toFixed(2)}
                      </Typography>
                    </Container>
                    <Container
                      sx={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "center",
                        mt: 2,
                      }}
                    >
                      <Button
                        style={buttonStyleCart}
                        onClick={() => onHandleViewMore(product.id)}
                      >
                        View More
                      </Button>
                      <Button
                        style={buttonStyleCart}
                        onClick={() => addToCart(product)}
                      >
                        Add To Cart
                      </Button>
                    </Container>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}

const buttonStyleCart = {
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "bold",
  padding: "8px 16px",
  transition: "background-color 0.3s ease, transform 0.3s ease",
};

export default ProductsComponent;
