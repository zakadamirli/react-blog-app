import React, { useState, useEffect } from "react";
import { Avatar, Typography, IconButton, Box } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { PostWithAuth } from "../../services/HttpService";

function Post({ postId, title, text, userId, userName, initialLikes, isLikedByUser }) {
  const [liked, setLiked] = useState(isLikedByUser);
  const [likeCount, setLikeCount] = useState(initialLikes);

  useEffect(() => {
    // Post yükləndikdən sonra like vəziyyətini və sayını yenilə
    fetchLikes();
  }, []);

  const handleLike = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
      setLiked(true);
      // Yeni like əlavə et
      PostWithAuth("/likes", { postId, userId }).catch((err) => console.log(err));
    } else {
      setLikeCount(likeCount - 1);
      setLiked(false);
      // Like silin (əgər lazım olsa, POST requesti ilə silə bilərsiniz)
    }
  };

  const fetchLikes = () => {
    // Postun likes məlumatlarını əldə et
    fetch(`/likes?postId=${postId}`)
      .then((res) => res.json())
      .then((data) => {
        const userLiked = data.some((like) => like.userId === userId);
        setLiked(userLiked);
        setLikeCount(data.length);
      });
  };

  return (
    <Box sx={{ marginBottom: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link to={`/users/${userId}`} style={{ textDecoration: "none" }}>
          <Avatar sx={{ bgcolor: "transparent", background: "linear-gradient(45deg, #42A5F5, #1E88E5)" }}>
            {userName.charAt(0).toUpperCase()}
          </Avatar>
        </Link>
        <Typography variant="h6" sx={{ marginLeft: 1 }}>
          {title}
        </Typography>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
        {text}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
        <IconButton onClick={handleLike}>
          <FavoriteIcon style={{ color: liked ? "red" : "" }} />
        </IconButton>
        <Typography variant="body2" sx={{ marginLeft: 1 }}>
          {likeCount} Likes
        </Typography>
      </Box>
    </Box>
  );
}

export default Post;