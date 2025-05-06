import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import React from 'react';
//import { useSelector } from 'react-redux';

function CartComponent() {
  const cartItems = [{
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3,
      "count": 400
    }
  }]
 
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
        My Cart List of Items Added
      </Typography>

       {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        cartItems.map((item) => (
          <Card
            key={item.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              padding: 2,
              boxShadow: 2,
              borderRadius: 2,
            }}
          >
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              sx={{ width: 100, objectFit: 'contain', mr: 2 }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Quantity: {item.quantity}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ₹{(item.price * 84.27).toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        ))
      )} 
    </Container>
  );
}

export default CartComponent;
