/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  IconButton,
  Snackbar,
} from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import emailjs from "emailjs-com";
import MuiAlert from "@mui/material/Alert";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_s0z51zs", // Replace with EmailJS Service ID
        "template_0h0xzjq", // Replace with EmailJS Template ID
        formData,
        "1QvcBdak4_LbDZVF6" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setSnackbarMessage("Message sent successfully!");
          setIsError(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          setSnackbarMessage("Failed to send message.");
          setIsError(true);
        }
      );

    setOpenSnackbar(true);
  };

  return (
    <Box sx={{ p: 14, backgroundColor: "#f3f6fa" }}>
      <Grid container spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: "black" }}>
            WANT TO BOOK AN APPOINTMENT ?
          </Typography>
<br></br>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ color: "black" }}
          >
            EMAIL
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: "grey" }}>
            mlgphotography11@gmail.com
          </Typography>

          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ color: "black" }}
          >
            ADDRESS
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: "grey" }}>
            Bhopal, Madhya Pradesh, India.
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ color: "black" }}
          >
            PHONE NUMBER
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: "grey" }}>
            +91 6260085106
          </Typography>

          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ color: "black" }}
          >
            SOCIALS
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
            <IconButton
              sx={{ bgcolor: "black", color: "white" }}
              href="https://www.facebook.com/share/1YcTQM6yDj/"
            >
              <Facebook />
            </IconButton>

            <IconButton
              sx={{ bgcolor: "black", color: "white" }}
              href="https://www.instagram.com/gaurav_ghaghre11"
            >
              <Instagram />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
