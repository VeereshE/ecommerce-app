import { Container, Typography } from "@mui/material";
import React from "react";

function SubBannerComponent() {
  return (
    <div style={{ backgroundColor: "#007BFF", padding: "30px 0" }}>
      <Container
        maxWidth="md"
        style={{
          color: "white",
          display: "flex",
          gap: "30px",
          alignItems: "center",
          justifyContent:"center",
          flexWrap: "wrap",
        }}
      >
        <img
          src="https://res.cloudinary.com/dgvec2ipx/image/upload/v1746483446/IMG-20250506-WA0000_1_qpcvgg.jpg"
          alt="Premium Quality Product"
          style={{
            width: "50%",
            maxWidth: "300px",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          }}
        />

        <div style={{ flex: 1, minWidth: "250px" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
            Why Choose <span style={{ color: "#FFD700" }}>BuyNxt</span>?
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
            We stand for one thing above all—<strong>Unmatched Quality</strong>.
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "10px" }}>
            Every product is carefully curated to ensure the best for our
            customers.
          </Typography>
        </div>
      </Container>
    </div>
  );
}

export default SubBannerComponent;
