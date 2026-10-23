import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 * Shows the details of the user given by the :userId route parameter.
 */
function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return <Typography variant="body1">User not found.</Typography>;
  }

  return (
    <Card className="user-detail-card" variant="outlined">
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {user.first_name} {user.last_name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {user.occupation}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {user.location}
        </Typography>
        <Typography variant="body1" className="user-detail-description">
          {user.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/photos/${user._id}`} variant="contained">
          View photos
        </Button>
      </CardActions>
    </Card>
  );
}

export default UserDetail;
