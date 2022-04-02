import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
  Link,
} from "react-router-dom";
import Login from "./Login";
import About from "./About";
import Home from "./Home";
import { Helmet, HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <HelmetProvider>
      <Router>
        <ul
          style={{
            display: "flex",
            width: 200,
            justifyContent: "space-between",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/about">About</Link>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
