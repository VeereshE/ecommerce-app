import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, decrement } from "../store/Slices/index";

function CartComponent() {

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.counter);

  const handleIncrement = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrement(item.id));
    }
  };

  const totalPrice = products.reduce(
    (acc, item) => acc + item.quantity * item.price * 84.27,
    0
  );
  

  return (
    <Container sx={{ mt: 4 }}>
      {products.length === 0 ? (
        <Box
          sx={{
            textAlign: "center",
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            paddingBottom:3
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty cart"
            width={150}
            height={150}
            style={{ opacity: 0.6 }}
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "text.secondary" }}
          >
            Your cart is empty
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Looks like you haven't added anything yet.
          </Typography>
          <Button variant="contained" color="primary" href="/products" sx={{ mt: 2 }}>
            Browse Products
          </Button>
        </Box>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      fontSize: {
                        xs: "16px",
                        sm: "18px",
                        md: "18px",
                      },
                    }}
                  >
                    Product Images
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      fontSize: {
                        xs: "16px",
                        sm: "18px",
                        md: "18px",
                      },
                    }}
                  >
                    Product Name
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      fontSize: {
                        xs: "16px",
                        sm: "18px",
                        md: "18px",
                      },
                    }}
                  >
                    Price (INR)
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      fontSize: {
                        xs: "16px",
                        sm: "18px",
                        md: "18px",
                      },
                    }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      fontSize: {
                        xs: "16px",
                        sm: "18px",
                        md: "18px",
                      },
                    }}
                  >
                    Total
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Avatar
                        variant="square"
                        src={item.image}
                        alt={item.title}
                        sx={{ width: 60, height: 60 }}
                      />
                    </TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>₹{(item.price * 84.27).toFixed(2)}</TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1,
                          flexWrap: "nowrap",
                        }}
                      >
                        <Button
                          onClick={() => handleDecrement(item.id)}
                          variant="contained"
                          size="small"
                          sx={{
                            minWidth: 30,
                            width: 30,
                            height: 30,
                            padding: 0,
                            fontSize: "1rem",
                          }}
                        >
                          -
                        </Button>
                        <Typography
                          sx={{
                            minWidth: 20,
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: {
                              xs: "12px",
                              sm: "16px",
                              md: "16px",
                            },
                          }}
                        >
                          {item.quantity}
                        </Typography>
                        <Button
                          onClick={() => handleIncrement(item.id)}
                          variant="contained"
                          size="small"
                          sx={{
                            minWidth: 30,
                            width: 30,
                            height: 30,
                            padding: 0,
                            fontSize: "1rem",
                          }}
                        >
                          +
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell>
                      ₹{(item.price * item.quantity * 84.27).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography
            variant="h6"
            sx={{
              mt: 2,
              textAlign: "right",
              fontWeight: "bold",
              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "18px",
              },
            }}
          >
            Grand Total: ₹{totalPrice.toFixed(2)}
          </Typography>
        </>
      )}
    </Container>
  );
}

export default CartComponent;
