# Quest App

This project is a React application that manages and displays a list of posts. The `Home` component fetches posts from an API, displays them to users, and allows users to add new posts. It’s designed to practice handling asynchronous data fetching, error handling, and rendering updates in real-time.

## Project Purpose

- **Displaying Posts**: Fetches data from an API to display posts to users.
- **Error and Loading States**: Manages errors and loading states during data fetching.
- **Adding New Posts**: Provides a form to add new posts to the existing list dynamically.

## Key Features

- **Data Fetching (`fetchPosts`):**  
  Fetches data from the `/posts` endpoint using the `fetch` API.
  
- **Error Handling:**  
  Displays error messages in case of network or server errors.

- **Dynamic List Refresh:**  
  Automatically refreshes the post list after a new post is added.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/zakadamirli/Quest-app.git
