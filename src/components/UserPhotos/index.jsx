import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";
import formatDateTime from "../../lib/formatDate";

/**
 * Define UserPhotos, a React component of Project 4.
 * Shows every photo of the user given by the :userId route parameter,
 * each followed by its comments.
 */
function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  if (photos.length === 0) {
    return <Typography variant="body1">This user has no photos.</Typography>;
  }

  return (
    <div className="user-photos">
      {photos.map((photo) => (
        <Card key={photo._id} className="user-photos-card" variant="outlined">
          <CardMedia
            component="img"
            image={require(`../../images/${photo.file_name}`)}
            alt={`Uploaded on ${formatDateTime(photo.date_time)}`}
            className="user-photos-image"
          />
          <CardContent>
            <Typography variant="caption" color="text.secondary">
              Posted {formatDateTime(photo.date_time)}
            </Typography>

            <Divider className="user-photos-divider" />

            {(photo.comments ?? []).length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                No comments yet.
              </Typography>
            ) : (
              photo.comments.map((comment) => (
                <div key={comment._id} className="user-photos-comment">
                  <Typography variant="subtitle2">
                    <MuiLink component={Link} to={`/users/${comment.user._id}`}>
                      {comment.user.first_name} {comment.user.last_name}
                    </MuiLink>
                    <Typography
                      component="span"
                      variant="caption"
                      color="text.secondary"
                      className="user-photos-comment-date"
                    >
                      {formatDateTime(comment.date_time)}
                    </Typography>
                  </Typography>
                  <Typography variant="body2">{comment.comment}</Typography>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;
