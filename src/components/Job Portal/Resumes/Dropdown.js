import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faEye, faShareAlt, faCloudDownload } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="item-action dropdown">
      <button type="button" onClick={toggleDropdown} className='bg-white border-0'>
        <FontAwesomeIcon icon={faEllipsisH} />
      </button>
      <div className={`dropdown-menu dropdown-menu-center ${isDropdownOpen ? 'show' : ''}`}
      style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
        {items.map((item, index) => (
          <button key={index} onClick={() => window.location.href = item.url} className="dropdown-item">
            <FontAwesomeIcon icon={item.icon} className="dropdown-icon" /> {item.text}
          </button>
        ))}
      </div>
    </div>
  );
};

// Usage example
const YourComponent = () => {
  const dropdownItems = [
    { icon: faEye, text: "View Details", url: "fake_url" },
    { icon: faShareAlt, text: "Share", url: "fake_url" },
    { icon: faCloudDownload, text: "Download", url: "fake_url" },
  ];

  return <Dropdown items={dropdownItems} />;
};

export default YourComponent;
