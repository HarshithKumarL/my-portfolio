import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  InputAdornment,
  Alert,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";

export default function ContactForm() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [lastSubmittedData, setLastSubmittedData] = useState(null);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const [alertOpen, setAlertOpen] = useState(false);

  const isSameSubmission = (a, b) => {
    return (
      a &&
      b &&
      a.name.trim() === b.name.trim() &&
      a.email.trim() === b.email.trim() &&
      a.message.trim() === b.message.trim()
    );
  };

  const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDuplicate(false);

    if (isSameSubmission(formData, lastSubmittedData)) {
      setIsDuplicate(true);
      setAlertOpen(true);
      return;
    }

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setLastSubmittedData(formData);
        setAlertOpen(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Error submitting form.");
      }
    } catch (err) {
      console.log(err);
      alert("Network error. Please try again.");
    }
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
        position: "relative",
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

      {alertOpen && (
        <Alert
          severity={isDuplicate ? "warning" : "success"}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlertOpen(false);
                setIsDuplicate(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{
            mb: 2,
            width: isSmallScreen ? "100%" : "60%",
            alignSelf: "center",
          }}
        >
          {isDuplicate
            ? "You've already submitted the same message."
            : "Message sent successfully! I'll get back to you soon."}
        </Alert>
      )}

      <Box
        component="form"
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
          name="name"
          required
          variant="outlined"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
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
          disabled={alertOpen}
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          required
          variant="outlined"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
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
          disabled={alertOpen}
        />

        <TextField
          fullWidth
          label="Message"
          name="message"
          multiline
          required
          minRows={4}
          variant="outlined"
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
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
          disabled={alertOpen}
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
          disabled={alertOpen}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
}
