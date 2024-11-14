import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function NavBar() {
  let userId = 5;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>
            <Link
              to="/"
              style={{
                color: "inherit",
                textDecoration: "none",
                boxShadow: "none",
                color: "white",
              }}
            >
              Home
            </Link>
          </Typography>
          <Typography>
            <Link
              to={`/users/${userId}`}
              style={{
                color: "inherit",
                textDecoration: "none",
                boxShadow: "none",
                color: "white",
              }}
            >
              User
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
