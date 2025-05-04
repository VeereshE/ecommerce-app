import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Container, Paper } from "@mui/material";

export default function FreqAskedQuestion() {
  return (
    <Container style={{ paddingBottom: "10px" }}>
      <Typography
        variant="h5"
        gutterBottom
        align="start"
        color="#1976D2"
        sx={{ fontWeight: "bold" }}
      >
        Frequently Asked Questions
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon  color="#1976D2"/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            variant="h6"
            color="#1976D2"
            sx={{
              fontSize:"1rem", 
              fontWeight: "bold",
            }}
          >
            What payment methods do you accept?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#1976D2">
            We accept all major credit and debit cards, PayPal, Apple Pay,
            Google Pay, and some Buy Now, Pay Later services like Klarna and
            Afterpay.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon  color="#1976D2"/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            variant="h6"
            color="#1976D2"
            sx={{
              fontSize:"1rem", 
              fontWeight: "bold",
            }}
          >How long does shipping take?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#1976D2">
            Standard shipping typically takes 3–7 business days. Expedited and
            express options are also available at checkout for faster delivery.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            variant="h6"
            color="#1976D2"
            sx={{
              fontSize:"1rem", 
              fontWeight: "bold",
            }}
          >
            Can I return or exchange an item?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#1976D2">
            Yes, we offer a 30-day return policy for unused items in original
            packaging. Visit our Returns & Exchanges page for a step-by-step
            guide.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            variant="h6"
            color="#1976D2"
            sx={{
              fontSize:"1rem", 
              fontWeight: "bold",
            }}
          > How do I track my order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#1976D2">
            Once your order ships, you'll receive an email with a tracking
            number and link. You can also track it via your account dashboard.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
           <Typography
            variant="h6"
            color="#1976D2"
            sx={{
              fontSize:"1rem", 
              fontWeight: "bold",
            }}
          >
            Do you ship internationally?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#1976D2">
            Yes, we ship to over 50 countries worldwide. International shipping
            rates and delivery times will vary based on location.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
