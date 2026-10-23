import React from "react";
import {
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link, useMatch } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

/**
 * Define UserList, a React component of Project 4.
 * Shows every user; clicking a name opens that user's detail view.
 */
function UserList() {
  const users = models.userListModel();
  const userMatch = useMatch("/users/:userId");
  const photosMatch = useMatch("/photos/:userId");
  const activeId = userMatch?.params.userId ?? photosMatch?.params.userId;

  return (
    <List component="nav" aria-label="Users">
      {users.map((user) => (
        <React.Fragment key={user._id}>
          <ListItemButton
            component={Link}
            to={`/users/${user._id}`}
            selected={user._id === activeId}
          >
            <ListItemText primary={`${user.first_name} ${user.last_name}`} />
          </ListItemButton>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default UserList;
