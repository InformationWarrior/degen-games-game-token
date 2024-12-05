import React, { useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'; // Import icons
import '../styles/Navbar.css';

const Navbar = () => {
  const [soundOn, setSoundOn] = useState(true); // Track sound state

  const toggleSound = () => {
    setSoundOn(!soundOn);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">MyApp</div>
      <div className="navbar-buttons">
        <button className="navbar-button invite-button">Invite</button>
        <button className="navbar-button connect-button">Connect</button>
        <button className="navbar-button sound-button" onClick={toggleSound}>
          {soundOn ? <FaVolumeUp size={20} /> : <FaVolumeMute size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
