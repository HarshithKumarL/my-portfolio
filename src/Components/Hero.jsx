import { Box, Card, IconButton, Typography } from "@mui/material";
import bgImage from "../assets/hero-image.png";
import { GitHub, LinkedIn, Mail, Phone } from "@mui/icons-material";

const techImages = [
  "src/assets/html5.png",
  "src/assets/css3.png",
  "src/assets/js.png",
  "src/assets/react-icon.png",
  "src/assets/bootstrap.png",
  "src/assets/mongo-db.png",
  "src/assets/git.png",
];

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
        scrollSnapAlign: "start",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "80%",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          pl: { xs: 2, sm: 6, md: 10 },
          color: "#fff",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem" }, fontWeight: 700 }}
          >
            Harshith Kumar
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" }, mt: 1 }}
          >
            React Frontend Developer
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "0.95rem", sm: "1.1rem" }, mt: 1 }}
          >
            I build modern, responsive, and scalable web applications.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <IconButton
              sx={{ color: "#fff" }}
              href="https://github.com/yourusername"
              target="_blank"
            >
              <GitHub />
            </IconButton>
            <IconButton
              sx={{ color: "#fff" }}
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
            >
              <LinkedIn />
            </IconButton>
            <IconButton sx={{ color: "#fff" }} href="mailto:your@email.com">
              <Mail />
            </IconButton>
            <IconButton sx={{ color: "#fff" }} href="tel:+1234567890">
              <Phone />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "20%",
          background: "linear-gradient(135deg, #000000 0%, #434343 100%)",
          zIndex: 0,
        }}
      />

      <Card
        sx={{
          position: "absolute",
          top: "80%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "95%", sm: "90%", md: "75%" },
          height: 100,
          boxShadow: 6,
          zIndex: 2,
          background: "linear-gradient(135deg, #000000 0%, #434343 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          px: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "nowrap",
            width: "100%",
            overflowX: "auto",
            "&::-webkit-scrollbar": { display: "none" }, // hide scrollbar for webkit browsers
            msOverflowStyle: "none", // IE and Edge scrollbar hiding
            scrollbarWidth: "none", // Firefox scrollbar hiding
          }}
        >
          {techImages.map((src, idx) => (
            <Box
              key={idx}
              component="img"
              src={src}
              alt={`tech-${idx}`}
              sx={{
                height: 70,
                width: "auto",
                objectFit: "contain",
                flexShrink: 0,
                filter: "brightness(0) invert(1)",
              }}
            />
          ))}
        </Box>
      </Card>
    </Box>
  );
}
