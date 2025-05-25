import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import img from "../assets/profilepic.jpeg";

export default function AboutMe() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000000 0%, #434343 100%)",
        py: 6,
        px: { xs: 2, sm: 4, md: 10 },
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        gap: 4,
        scrollSnapAlign: "start",
      }}
    >
      <Box
        sx={{
          width: isSmallScreen ? "100%" : "30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: isSmallScreen ? "auto" : "100vh",
          mb: isSmallScreen ? 4 : 0,
        }}
      >
        <Box
          component="img"
          src={img}
          alt="About Me Main"
          sx={{
            width: isSmallScreen ? "100%" : "90%",
            height: isSmallScreen ? "auto" : "65%",
            objectFit: "cover",
            borderRadius: 2,
            boxShadow: 5,
          }}
        />
      </Box>

      <Box
        sx={{
          width: isSmallScreen ? "100%" : "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 3,
            textAlign: isSmallScreen ? "center" : "left",
            fontSize: { xs: "1.8rem", sm: "2.2rem" },
            color: "#fff",
          }}
        >
          About Me
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#ccc",
            fontSize: "1rem",
            textAlign: isSmallScreen ? "center" : "left",
            maxWidth: "700px",
          }}
        >
          I'm a passionate and results-driven Software Engineer with 2.7+ years
          of hands-on experience building responsive and scalable web
          applications. Skilled in JavaScript, React.js, TypeScript, Node.js,
          and modern frontend ecosystems, I specialize in delivering clean,
          efficient, and maintainable code for dynamic user interfaces and
          microfrontend architectures. I've worked on high-impact projects for
          enterprise clients like Shell and Walmart, where I implemented robust
          features, optimized performance, and ensured seamless integration
          between frontend and backend systems. With a strong foundation in REST
          APIs, Redux, and testing tools like Jest, I thrive in Agile
          environments and love collaborating across teams to bring intuitive
          digital experiences to life. I'm always looking to learn new
          technologies and contribute to impactful projects that challenge and
          grow my skills.
        </Typography>

        {/* Favorite Quote Section */}
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            mt: 4,
            mb: 1,
            fontWeight: 600,
            textAlign: isSmallScreen ? "center" : "left",
          }}
        >
          Favorite Quote
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#ccc",
            fontSize: "1rem",
            textAlign: isSmallScreen ? "center" : "left",
            fontStyle: "italic",
          }}
        >
          “Code is like humor. When you have to explain it, it’s bad.” – Cory
          House
        </Typography>
      </Box>
    </Box>
  );
}
