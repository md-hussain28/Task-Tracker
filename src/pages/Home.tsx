// HomePage.tsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Box, // Import Box
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Styled components
const StyledHeader = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: "none",
}));

const HeroSection = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(4),
  textAlign: "center",
  marginBottom: theme.spacing(4),
  flexGrow: 1, // Make it flexible
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  boxShadow: `0 4px 10px 0 ${theme.palette.common.black}`,
  borderRadius: theme.shape.borderRadius,
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: `0 6px 15px 0 ${theme.palette.common.black}`,
  },
}));

const Footer = styled("footer")(({ theme }) => ({
  textAlign: "center",
  padding: "20px",
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  marginTop: "40px",
}));

const QuoteTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem", // Adjust size as needed
  fontStyle: "italic",
  textAlign: "center",
  color: theme.palette.common.white,
  margin: "0 auto",
  maxWidth: "800px", // Limit width for better readability
}));

const HomePage: React.FC = () => {
  const quotes = [
    "The best way to predict the future is to create it.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't watch the clock; do what it does. Keep going.",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = React.useState(0);

  // Example function to rotate quotes, you can set this up with a timer or button click
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(intervalId);
  }, [quotes.length]);

  return (
    <Box 
      sx={{ 
        display: "flex", 
        flexDirection: "column", 
        minHeight: "100vh" // Set minimum height to 100% of the viewport height
      }}
    >
      <StyledHeader position="static">
        <Toolbar>
          <QuoteTypography variant="h6" sx={{ flexGrow: 1 }}>
            "{quotes[currentQuoteIndex]}"
          </QuoteTypography>
        </Toolbar>
      </StyledHeader>

      <HeroSection>
        <Typography variant="h3" gutterBottom>
          Welcome to My Task App!
        </Typography>
        <Typography variant="h5" gutterBottom>
          Organize your tasks efficiently and effectively.
        </Typography>
        <Typography variant="body1" paragraph>
          This application allows you to create, edit, and manage tasks easily.
          Keep track of your deadlines, prioritize your work, and ensure nothing
          falls through the cracks.
        </Typography>
        <Link to="/add-task">
          <Button variant="contained" color="secondary">
            Get Started
          </Button>
        </Link>
      </HeroSection>

      <Container sx={{ flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom align="center">
          Key Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard>
              <CardContent>
                <Typography variant="h5" component="div">
                  Create Tasks
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Easily add new tasks to your list with all relevant details.
                </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard>
              <CardContent>
                <Typography variant="h5" component="div">
                  Edit and Delete
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Modify your tasks or remove them entirely with just a click.
                </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard>
              <CardContent>
                <Typography variant="h5" component="div">
                  Prioritize Your Work
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Set priorities to focus on what matters most.
                </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
        </Grid>
      </Container>

      <Footer>
        <Typography variant="body2" color="inherit">
          Developed by Md Saquib Hussain
        </Typography>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            href="https://github.com/md-hussain28"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "15px", color: "inherit" }}
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-saquib-hussain/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} My Task App. All Rights Reserved.
        </Typography>
      </Footer>
    </Box>
  );
};

export default HomePage;
