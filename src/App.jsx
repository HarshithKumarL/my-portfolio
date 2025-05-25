import { Box, useMediaQuery, useTheme } from "@mui/material";
import "./App.css";
import AboutMe from "./Components/About";
import ContactForm from "./Components/ContactForm";
import Hero from "./Components/Hero";
import ProfessionalExperience from "./Components/ProfessionalExperience";
import ProjectList from "./Components/Projects";

function App() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: isLargeScreen ? "y mandatory" : "none",
        scrollBehavior: "smooth",
      }}
    >
      <Hero />
      <AboutMe />
      <ProfessionalExperience />
      <ProjectList />
      <ContactForm />
    </Box>
  );
}

export default App;
