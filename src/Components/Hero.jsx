import { Box, Card, IconButton, Typography } from "@mui/material";
import bgImage from "../assets/cover-image.jpg";
import { GitHub, LinkedIn, Mail, Phone } from "@mui/icons-material";
import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import js from "../assets/js.png";
import reactIcon from "../assets/react-icon.png";
import bootstrap from "../assets/bootstrap.png";
import mongoDb from "../assets/mongo-db.png";
import git from "../assets/git.png";

const techImages = [html5, css3, js, reactIcon, bootstrap, mongoDb, git];

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
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.8rem" },
              fontWeight: 900,
              letterSpacing: "0.1em",
              color: "#fff",
              textTransform: "uppercase",
              textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
            }}
          >
            Harshith Kumar
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", sm: "1.3rem" },
              fontWeight: 400,
              color: "#ccc",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              mt: 1,
            }}
          >
            React Frontend Developer
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem" },
              mt: 1,
              fontStyle: "italic",
              color: "#ccc",
              textAlign: "left", // or left, based on layout
            }}
          >
            Precise. Focused. Reliable. Efficient.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <IconButton
              sx={{
                color: "#fff",
                p: 1,
                transition: "background-color 0.3s ease",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
              href="https://github.com/HarshithKumarL"
              target="_blank"
            >
              <GitHub />
            </IconButton>
            <IconButton
              sx={{
                color: "#fff",
                p: 1,
                transition: "background-color 0.3s ease",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
              href="https://www.linkedin.com/in/harshithkumarl/"
              target="_blank"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              sx={{
                color: "#fff",
                p: 1,
                transition: "background-color 0.3s ease",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
              href="mailto:harshith0506@gmail.com"
            >
              <Mail />
            </IconButton>
            <IconButton
              sx={{
                color: "#fff",
                p: 1,
                transition: "background-color 0.3s ease",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
              href="tel:9380101309"
            >
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
            "&::-webkit-scrollbar": { display: "none" },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
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
