import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Switch əvəzinə Routes
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import User from "./components/User/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes> {/* Switch əvəzinə Routes */}
          <Route path="/" element={<Home />} /> {/* component yox, element */}
          <Route path="/users/:userId" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
