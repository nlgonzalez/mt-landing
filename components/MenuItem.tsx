
import React from 'react';

interface MenuItemProps {
  label: string;
  isSelected?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, isSelected }) => {
  const activeClass = isSelected ? 'menu-item-active' : '';
  return (
    <div className={`menu-item ${activeClass}`}>
      {label}
    </div>
  );
}
export default MenuItem