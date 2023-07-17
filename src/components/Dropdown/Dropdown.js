import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__button" onMouseEnter={toggleDropdown}>
        {selectedItem ? selectedItem : 'Select an item'}
      </button>
      {isOpen && (
        <ul className="dropdown__list" onMouseLeave={toggleDropdown}>
          {items.map((item) => (
            <li
              key={item}
              className="dropdown__item"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
