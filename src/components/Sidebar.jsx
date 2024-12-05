import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as Icons from "react-icons/fa"; // Using react-icons for the icons
import "../styles/Sidebar.css"

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false); // State to track sidebar collapse

  const routes = [
    { path: "/", label: "Home", icon: "FaHome" },
    { path: "/games", label: "Games", icon: "FaGamepad" },
    { path: "/rewards", label: "Rewards", icon: "FaTrophy" },
    { path: "/settings", label: "Settings", icon: "FaCog" },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed); // Toggle the collapsed state
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <button className="toggle-btn" onClick={toggleSidebar}>
          {collapsed ? "X" : "|||"}
        </button>
      </div> 
      <div className={`sidebar-links ${collapsed ? "collapsed-links" : ""}`}>
        {routes.map((route, index) => {
          const Icon = Icons[route.icon]; // Dynamically rendering icon based on route
          return (
            <NavLink
              key={index}
              to={route.path}
              className="sidebar-link"
              activeClassName="active" // Add active class when clicked
            >
              <div className="sidebar-button">
                <Icon size={30} />
                {!collapsed && <span>{route.label}</span>}{" "}
                {/* Hide text when collapsed */}
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
