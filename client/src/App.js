

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Drill from "./pages/Drill";
import History from "./pages/History";

export default function App() {
  return (
    <BrowserRouter>
      {/* Header / Navbar */}
      <header style={styles.header}>
        <h1 style={{ margin: 0 }}>MERN Drills App</h1>
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/dashboard" style={styles.link}>
            Dashboard
          </Link>
          <Link to="/history" style={styles.link}>
            History
          </Link>
        </nav>
      </header>

      {/* Page Content */}
      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/drill/:id" element={<Drill />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>Made with React (Beginner Friendly)</p>
      </footer>
    </BrowserRouter>
  );
}

const styles = {
  header: {
    background: "#4a90e2",
    color: "white",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
  main: {
    padding: "20px",
    minHeight: "70vh",
    background: "#f5f7fa",
  },
  footer: {
    background: "#eee",
    textAlign: "center",
    padding: "10px",
    fontSize: "0.9rem",
    color: "#333",
  },
};
