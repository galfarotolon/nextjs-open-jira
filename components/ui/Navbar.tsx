import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlinedIcon fontSize="large" />
        </IconButton>
        <Typography variant="h5">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
