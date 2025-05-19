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

function TopProductComponent() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const onHandleViewMore = (id) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      navigate(`/products/${id}`);
    }, 400);
  };

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

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        const randomSix = shuffled.slice(0, 6);
        setProducts(randomSix);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Container sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          align="start"
          color="#1976D2"
          sx={{ fontWeight: "bold" }}
        >
          Best Selling Products
        </Typography>

        {loading ? (
          <CircularProgress sx={{ display: "block", margin: "0 auto" }} />
        ) : (
          <Grid
            container
            spacing={3}
            sx={{
              margin: "20px",
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
                  flexDirection: "row",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    height: "100%",
                    width: "350px",
                    boxShadow: 3,
                    borderRadius: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: "contain", width: "80%", padding: 3 }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography
                      color="#1976D2"
                      variant="h7"
                      Wrap
                      sx={{ fontWeight: 500 }}
                    >
                      {product.title}
                    </Typography>
                    <Container
                      sx={{ display: "flex", flexDirection: "row", gap: "7px" }}
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
                        flexDirection: "row",
                        gap: "15px",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "10px",
                      }}
                    >
                      <Button
                        style={buttonStyleCart}
                        onClick={() => onHandleViewMore(product.id)}
                      >
                        View more
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
  fontSize: "16px",
  fontWeight: "bold",
  transition: "background-color 0.3s ease, transform 0.3s ease",
  "&:hover": {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)",
  },
  "&:active": {
    transform: "scale(0.98)",
  },
};

export default TopProductComponent;
