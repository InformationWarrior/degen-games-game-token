import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";
import "./index.css"; // Import global CSS

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navbar - sticky at top */}
        <Navbar />

        {/* Sidebar - sticky on the left */}
        <Sidebar />
        <div className="main-container">
          {/* Content area */}
          <div className="content">
            <AppRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
