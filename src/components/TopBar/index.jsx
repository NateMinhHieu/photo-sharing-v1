import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useMatch } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

// TODO: replace with your own name.
const STUDENT_NAME = "Quách Vũ Minh Hiếu";

/**
 * Work out what the main content area is showing, based on the URL only,
 * so the TopBar stays correct after a browser refresh (deep linking).
 */
function useContextLabel() {
  const userMatch = useMatch("/users/:userId");
  const photosMatch = useMatch("/photos/:userId");

  const userId = userMatch?.params.userId ?? photosMatch?.params.userId;
  const user = userId ? models.userModel(userId) : null;
  if (!user) {
    return "";
  }

  const fullName = `${user.first_name} ${user.last_name}`;
  return photosMatch ? `Photos of ${fullName}` : fullName;
}

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  const contextLabel = useContextLabel();

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar className="topbar-toolbar">
        <Typography variant="h5" color="inherit">
          {STUDENT_NAME}
        </Typography>
        <Typography variant="h6" color="inherit">
          {contextLabel}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
