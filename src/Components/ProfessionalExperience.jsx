import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import softwareEngineerIcon from "../assets/bootstrap.png";
import internIcon from "../assets/grad.png";

const experiences = [
  {
    year: "Nov 2022 - Present",
    title: "Software Engineer",
    company: "Zensar Technologies",
    description:
      "Developed scalable frontend features for enterprise clients using React, Redux, and Microfrontend architecture. Built responsive UIs with React and Bootstrap. Optimized performance with TypeScript and hooks. Integrated REST APIs and created dynamic forms and data tables. Maintained unit tests and collaborated in Agile teams using Git, Jira, and Redux.",
    icon: softwareEngineerIcon,
  },
  {
    year: "Mar 2021 - Apr 2021",
    title: "Intern",
    company: "eMudhra Ltd",
    description:
      "Gained hands-on experience with AWS during an internship, managing EC2 instances and S3 buckets, configuring IAM roles, and deploying scalable applications—building a strong foundation in cloud infrastructure and AWS core services.",
    icon: internIcon,
  },
];

export default function ProfessionalExperience() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="experience"
      sx={{
        width: "100%",
        minHeight: "100vh", // allow scroll instead of forcing
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
          color: "#fff",
          fontWeight: 700,
          mb: { xs: 4, sm: 6 },
          textAlign: "center",
          fontSize: { xs: "1.6rem", sm: "2.2rem", md: "2.5rem" },
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
      >
        Professional Experience
      </Typography>

      <Timeline
        position={isSmallScreen ? "alternate-reverse" : "left"}
        sx={{ maxWidth: 900, width: "100%" }}
      >
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            sx={{
              "&:hover": {
                backgroundColor: "#333",
                borderRadius: 2,
                transition: "background-color 0.3s ease",
              },
              px: { xs: 1, sm: 2 },
              py: { xs: 1, sm: 2 },
              mb: { xs: 1.5, sm: 3 },
            }}
          >
            {!isSmallScreen && (
              <TimelineOppositeContent
                sx={{
                  color: "#bbb",
                  fontSize: { xs: "0.75rem", sm: "0.9rem" },
                  whiteSpace: "nowrap",
                  flex: 0.3,
                }}
              >
                {exp.year}
              </TimelineOppositeContent>
            )}

            <TimelineSeparator>
              <TimelineDot
                sx={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  p: 0,
                  width: { xs: 36, sm: 40 },
                  height: { xs: 36, sm: 40 },
                }}
              >
                <Box
                  component="img"
                  src={exp.icon}
                  alt={`${exp.title} icon`}
                  sx={{
                    width: { xs: 30, sm: 40 },
                    height: { xs: 30, sm: 40 },
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </TimelineDot>
              {index !== experiences.length - 1 && (
                <TimelineConnector
                  sx={{ bgcolor: "#555", minHeight: { xs: 50, sm: 60 } }}
                />
              )}
            </TimelineSeparator>

            <TimelineContent
              sx={{
                color: "#eee",
                flex: 1,
                pl: { xs: 2, sm: 3 },
                pr: { xs: 1, sm: 2 },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.1rem", sm: "1.25rem" },
                }}
              >
                {exp.title}
              </Typography>
              <Typography
                sx={{
                  fontStyle: "italic",
                  color: "#ccc",
                  fontSize: { xs: "0.85rem", sm: "0.95rem" },
                  mb: 1,
                }}
              >
                {exp.company}
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  color: "#aaa",
                  fontSize: { xs: "0.85rem", sm: "0.9rem" },
                  lineHeight: 1.5,
                }}
              >
                {exp.description}
              </Typography>
              {isSmallScreen && (
                <Typography
                  sx={{
                    color: "#888",
                    fontSize: "0.75rem",
                    mt: 1,
                    fontStyle: "italic",
                  }}
                >
                  {exp.year}
                </Typography>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
