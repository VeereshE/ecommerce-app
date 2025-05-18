import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Avatar,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function LogInComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    const newErrors = {
      email: "",
      password: "",
    };

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address."; 
    }

    if (!password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", { email, password });
      toast.success("Login Successfully! 😊", {
        position: "top-right",
      });
    }else{
      toast.error("Something went wrong! 😔", {
        position: "top-right",
      });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 3, mb: 5 }}>
      <Paper
        elevation={3}
        sx={{
          borderRadius: 3,
          padding: { xs: 4, sm: 6 },
        }}
      >
        <Box sx={{ textAlign: "center", mb: 3 }}>
          {/* Welcome Message with Avatar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
            }}
          >
            <Avatar sx={{ bgcolor: "#1976D2", mr: 1 }}>
              <PersonIcon />
            </Avatar>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#1976D2",
                fontSize: {
                  xs: "1.25rem",
                  sm: "1.5rem",
                  md: "1.75rem",
                  lg: "2rem",
                },
              }}
            >
              Welcome Back👋
            </Typography>
          </Box>

          {/* Email field */}
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />

          {/* Password field */}
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
          />

          {/* Submit button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "#007BFF",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#0069d9",
              },
            }}
            onClick={handleSubmit}
          >
            Log In
          </Button>
          <ToastContainer />
          {/* Registration link */}
          <Typography
            variant="body2"
            sx={{ mt: 2, textAlign: "center", color: "text.secondary" }}
          >
            Don't have an account? <a href="/register">Register here</a>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default LogInComponent;
