import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  InputAdornment,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Tooltip from "@mui/material/Tooltip";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";

export default function ContactForm() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Form state & errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  const [errors, setErrors] = useState({});

  // Regex patterns
  const nameRegex = /^[a-zA-Z\s]{2,}$/; // Only letters and spaces, min 2 chars
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: "" }); // Clear error on input change
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = "Name should only contain letters and spaces";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Email is not valid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // For now, just log form data (replace with actual send logic)
    console.log("Form submitted:", formData);

    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box
      id="contact"
      sx={{
        width: "100%",
        height: "100vh",
        scrollSnapAlign: "start",
        background: "linear-gradient(135deg, #000000 0%, #434343 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 10 },
        py: 6,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 4,
          textAlign: "center",
          fontSize: { xs: "1.8rem", sm: "2.2rem" },
          color: "#fff",
        }}
      >
        Contact Me
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: isSmallScreen ? "100%" : "60%",
          gap: 3,
        }}
      >
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange("name")}
          error={!!errors.name}
          helperText={errors.name}
          InputLabelProps={{ style: { color: "#bbb" } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon sx={{ color: "#bbb" }} />
              </InputAdornment>
            ),
            style: { color: "#fff" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#888" },
              "&:hover fieldset": { borderColor: "#ccc" },
              "&.Mui-focused fieldset": { borderColor: "#4CAF50" },
            },
          }}
        />

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
          error={!!errors.email}
          helperText={errors.email}
          InputLabelProps={{ style: { color: "#bbb" } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: "#bbb" }} />
              </InputAdornment>
            ),
            style: { color: "#fff" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#888" },
              "&:hover fieldset": { borderColor: "#ccc" },
              "&.Mui-focused fieldset": { borderColor: "#4CAF50" },
            },
          }}
        />

        <TextField
          fullWidth
          label="Message"
          multiline
          minRows={4}
          variant="outlined"
          value={formData.message}
          onChange={handleChange("message")}
          error={!!errors.message}
          helperText={errors.message}
          InputLabelProps={{ style: { color: "#bbb" } }}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{ alignSelf: "flex-start", mt: 1 }}
              >
                <MessageIcon sx={{ color: "#bbb" }} />
              </InputAdornment>
            ),
            style: { color: "#fff" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#888" },
              "&:hover fieldset": { borderColor: "#ccc" },
              "&.Mui-focused fieldset": { borderColor: "#4CAF50" },
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            alignSelf: "flex-start",
            backgroundColor: "#4CAF50",
            color: "#fff",
            px: 4,
            py: 1.5,
            fontWeight: 600,
            "&:hover": { backgroundColor: "#45a049" },
          }}
        >
          Send Message
        </Button>
      </Box>
      <Tooltip title={liked ? "Thanks for liking!" : "Like this website?"}>
        <Box
          onClick={toggleLike}
          sx={{
            position: "absolute",
            bottom: 24,
            right: 24,
            cursor: "pointer",
            bgcolor: "#4CAF50",
            borderRadius: "50%",
            p: 1.2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "#45a049",
              transform: "scale(1.05)",
            },
          }}
        >
          {liked ? (
            <ThumbUpAltIcon sx={{ color: "#fff" }} />
          ) : (
            <ThumbUpOffAltIcon sx={{ color: "#fff" }} />
          )}
        </Box>
      </Tooltip>
    </Box>
  );
}
