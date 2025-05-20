import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Rating,
  TextField,
  Button,
  Divider,
  Paper,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { toast } from "react-toastify";

function ReviewComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(3);
  const [reviewText, setReviewText] = useState("");
  const [errors, setErrors] = useState({});
  const [reviews, setReviews] = useState([]);

  const validate = () => {
    let tempErrors = {};

    if (!name.trim()) tempErrors.name = "Name is required";
    if (!email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Email is invalid";
    }

    if (!reviewText.trim()) tempErrors.reviewText = "Review is required";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/review`);
        const data = await response.json();
        setReviews(data.reverse());
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleSubmit = async () => {
    if (!validate()) return;

    const reviewData = {
      name,
      email,
      rating,
      review: reviewText,
      createdAt: new Date(),
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        const errMsg = await response.text();
        throw new Error(errMsg || "Failed to submit review");
      }

      const data = await response.json();
      setReviews([ ...reviews,reviewData]);
      console.log(...reviews,reviewData, "Reviews,ReviewData")
      setName("");
      setEmail("");
      setRating(3);
      setReviewText("");
      setErrors({});
      toast.success("Thank you! Your review has been submitted.", {
        position: "top-right",
      });
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Error submitting review.", {
        position: "top-right",
      });
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
           Drop your Review ! 😊
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          We value your feedback. Please fill out the form below.
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={Boolean(errors.name)}
            helperText={errors.name}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">Your Rating</Typography>
          <Rating
            name="user-rating"
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
            size="large"
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" gutterBottom>
            Your Review
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Write your review here..."
            required
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            error={Boolean(errors.reviewText)}
            helperText={errors.reviewText}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
        >
          Submit Review
        </Button>
      </Paper>

      {/* Review List */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mb: 2 }}>
        Customer Reviews
      </Typography>
      <Grid container spacing={3}>
        {reviews.length === 0 ? (
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              No reviews yet.
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 1 }}>
              Be the first to leave a review and help others!
            </Typography>
            <Button variant="outlined" size="small" sx={{ mt: 2 }}>
              Leave a Review
            </Button>
          </Box>
        ) : (
          reviews.map((rev, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ maxWidth: "250px",  Width:"300px", maxHeight: "300px" , flexGrow:1}}
              
            >
              <Card elevation={2} sx={{ borderRadius: 2, boxShadow: 2 }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "space-around" , gap:"10px"}}>
                    <Avatar
                      alt={rev.name}
                      src={rev.avatarUrl || "/path/to/default-avatar.jpg"}
                      sx={{ width: 40, height: 40, marginRight: 2 }}
                    />
                    <Typography variant="subtitle1" fontWeight="bold">
                      {rev.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ mt: 1, display: "block" }}
                    >
                      {new Date(rev.createdAt).toLocaleDateString()}
                    </Typography>
                  </Box>
                  <Rating
                    value={rev.rating}
                    readOnly
                    size="small"
                    sx={{ mt: 1 }}
                  />
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {rev.review}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}

export default ReviewComponent;
