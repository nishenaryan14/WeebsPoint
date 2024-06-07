import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

const NavBar = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      sx={{ background: theme.palette.background.dark, color: "#fff" }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
