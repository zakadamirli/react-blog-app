import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import PostForm from "../Post/PostForm";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch("/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(
        (result) => {
          console.log("Fetched posts:", result); // API cavabını yoxlayın
          
          // Əgər `result` array deyilsə, burda uyğunlaşma edin:
          setPostList(Array.isArray(result) ? result : result.posts || []);
          
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const refreshPosts = () => {
    fetchPosts(); // Postları yenidən çəkir
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          backgroundColor: "#e0f7fa",
          width: "100%",
        }}
      >
        {postList.map((post, index) => (
          <Post
            key={index}
            title={post.title}
            text={post.text}
            userId={post.userId}
            userName={post.userName}
            style={{
              marginBottom: "16px",
              width: "100%",
            }}
          />
        ))}

        {/* Yeni Post Formu */}
        <PostForm
          userId={1} // Nümunə olaraq userId
          userName={"John Doe"} // Nümunə olaraq userName
          refreshPosts={refreshPosts} // refreshPosts funksiyasını ötür
        />
      </div>
    );
  }
}

export default Home;
