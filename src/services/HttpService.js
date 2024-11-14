export const PostWithAuth = (url, body) => {
    const token = localStorage.getItem("authToken"); // Tokeni localStorage-dan götürür
    return fetch(process.env.REACT_APP_API_URL="http://localhost:8080" + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Authentication üçün token istifadə edilir
      },
      body: JSON.stringify(body),
    });
  };
  