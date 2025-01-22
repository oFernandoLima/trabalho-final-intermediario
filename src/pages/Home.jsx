import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography, Container } from "@mui/material";
import { useEffect } from "react";

function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/sign-in");
  };

  if (!user) return null;

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box textAlign="center">
        <Typography color="black" variant="h4" gutterBottom>
          Bem-vindo, {user.name}!
        </Typography>
        <Typography color="black" variant="body1" gutterBottom>
          Você está logado com o email: {user.email}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
