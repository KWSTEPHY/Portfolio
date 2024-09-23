import React from 'react';
import '../styles/Button.css';

const Button: React.FC = () => {
  const handleClick = () => {
    // Open the Google Drive link in a new tab for file download
    window.open('https://drive.google.com/file/d/1EycGQ-UBYp8natW2KOX8Z8AnDY6ZHsK2/view?usp=drive_link', '_blank');
  };

  return (
    <button className="download-button" onClick={handleClick}>
      Download CV
    </button>
  );
};

export default Button;