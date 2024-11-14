import React, { useState } from "react";
import { Avatar, Typography, TextField, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Comment({ userId, userName }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      const newComment = {
        id: comments.length + 1, // Simvolik ID
        text: commentText,
        userId: userId,
        userName: userName,
      };
      setComments([...comments, newComment]);
      console.log("New Comment Added: ", newComment);
      setCommentText(""); // Input-u təmizləyin
    }
  };

  return (
    <div>
      {/* Şərh yazma formu */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Write a comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleCommentSubmit}>
        Submit Comment
      </Button>

      {/* Şərhlər siyahısı */}
      <Box sx={{ marginTop: 2 }}>
        {comments.map((comment) => (
          <Box key={comment.id} sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
            <Link to={{ pathname: "/users/" + comment.userId }} style={{ textDecoration: "none" }}>
              <Avatar
                sx={{
                  bgcolor: "transparent",
                  width: 30,
                  height: 30,
                  background: "linear-gradient(45deg, #42A5F5, #1E88E5)",
                }}
              >
                {comment.userName.charAt(0).toUpperCase()}
              </Avatar>
            </Link>
            <Box sx={{ marginLeft: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {comment.userName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {comment.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default Comment;
