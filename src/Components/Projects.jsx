import React from "react";
import {
  Box,
  Button,
  Typography,
  CardMedia,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import img1 from "../assets/aks-travels.png";
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  {
    title: "AKS Travels",
    description:
      "A vehicle rental application featuring user rental preference submission with real-time validation, automated admin email notifications, offline data caching to prevent loss during connectivity issues, and serverless deployment for high reliability and scalability.",
    imageUrl: img1,
    demoLink: "https://aks-travels.vercel.app/",
    codeLink: "https://github.com/HarshithKumarL/AKSTravels",
    techStack: ["React", "EmailJS","Vercel"],
  },
  {
    title: "Project Two",
    description: "Cool project two description.",
    imageUrl: img1,
    demoLink: "https://demo.projecttwo.com",
    codeLink: "https://github.com/user/projecttwo",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
];

export default function ProjectList() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const gradientBackground =
    "linear-gradient(125deg, #000000 0%, #434343 100%)";

  return (
    <Box
      sx={{
        width: "100%",
        py: 4,
        background: gradientBackground,
      }}
    >
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: isSmallScreen
                ? "column"
                : isEven
                ? "row"
                : "row-reverse",
              color: "white",
              mb: 6,
              px: 2,
              py: 4,
              alignItems: "center",
              overflowY: "auto",
              scrollSnapAlign: "start",
            }}
          >
            <Box
              sx={{
                width: isSmallScreen ? "100%" : "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 3,
              }}
            >
              <CardMedia
                component="img"
                image={project.imageUrl}
                alt={project.title}
                sx={{
                  width: "100%",
                  height: "50vh",
                  objectFit: "cover",
                  borderRadius: 2,
                  transition: "transform 0.4s ease, filter 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    filter: "brightness(1.05)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                flex: 1,
                p: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: isSmallScreen ? "center" : "left",
              }}
            >
              <Typography variant="h4" fontWeight="bold" mb={2}>
                {project.title}
              </Typography>
              <Typography variant="body1" mb={3} color="#bbb">
                {project.description}
              </Typography>
              <Typography variant="body2" color="success.light" mb={2}>
                <strong>Tech Stack:</strong> {project.techStack.join(" · ")}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: isSmallScreen ? "center" : "flex-start",
                }}
              >
                <Button
                  variant="contained"
                  color="success"
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </Button>
                <Button
                  variant="outlined"
                  color="success"
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHubIcon />}
                >
                  Code
                </Button>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
