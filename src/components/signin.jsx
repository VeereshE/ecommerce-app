import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignInComponent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
    countryCode: "+1",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const isStrongPassword = (password) => {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  const isValidPhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email.";
    if (!formData.password) newErrors.password = "Password is required.";
    else if (!isStrongPassword(formData.password))
      newErrors.password =
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    else if (!isValidPhone(formData.phone))
      newErrors.phone = "Phone number must be 10 digits.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:5000/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          toast.success("Create account Successfully! 🎉", {
            position: "top-right",
          });
          localStorage.setItem("token", data.token);

          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            address: "",
            phone: "",
            countryCode: "+1",
          });
          setTimeout(() => {
            window.location.href = "/"; 
          }, 2000);
        } else {
          toast.error("Error, Please try again!", {
            position: "top-right",
          });
        }
      } catch (err) {
        console.error("Register error:", err);
      }
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 3, mb: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Box textAlign="center" mb={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2}
          >
            <Avatar sx={{ bgcolor: "#1976D2", mr: 1 }}>
              <PersonIcon />
            </Avatar>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ color: "#1976D2", fontSize: { xs: 16, sm: 20 } }}
            >
              Create Your Account👋
            </Typography>
          </Box>
        </Box>

        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                fullWidth
                value={formData.firstName}
                onChange={handleChange("firstName")}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                fullWidth
                value={formData.lastName}
                onChange={handleChange("lastName")}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Create Password"
                fullWidth
                type="password"
                value={formData.password}
                onChange={handleChange("password")}
                error={!!errors.password}
                helperText={errors.password}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Confirm Password"
                fullWidth
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange("confirmPassword")}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                fullWidth
                value={formData.address}
                onChange={handleChange("address")}
                error={!!errors.address}
                helperText={errors.address}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth error={!!errors.phone}>
                <InputLabel>Phone Number</InputLabel>
                <OutlinedInput
                  startAdornment={
                    <InputAdornment position="start">
                      {formData.countryCode}
                    </InputAdornment>
                  }
                  label="Phone Number"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                />
                {errors.phone && (
                  <Typography variant="caption" color="error" mt={0.5}>
                    {errors.phone}
                  </Typography>
                )}
              </FormControl>
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: "#1976D2",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Sign Up
          </Button>
          <ToastContainer />
          <Typography
            variant="body2"
            sx={{ mt: 2, textAlign: "center", color: "text.secondary" }}
          >
            Already have an account? <a href="/login">Login here</a>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
}

export default SignInComponent;
