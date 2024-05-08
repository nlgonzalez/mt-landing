
import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem'

interface MenuProps {
  mode: 'horizontal' | 'vertical';  // Here you can add more modes as needed
  theme: 'light' | 'dark';          // Extend this to include other themes
  selectedKeys?: string[];
  defaultSelectedKeys: string[];
  children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({
  mode,
  theme,
  selectedKeys,
  defaultSelectedKeys,
  children
}) => {
  const [activeKeys, setActiveKeys] = useState<string[]>(defaultSelectedKeys);

  useEffect(() => {
    if (selectedKeys) {
      setActiveKeys(selectedKeys);
    }
  }, [selectedKeys]);

  const handleItemClick = (key: string) => {
    if (!selectedKeys) { // Only update if not controlled externally
      setActiveKeys([key]);
    }
    console.log(`Item with key ${key} clicked`);
  };

  const renderMenuItems = () => {
    return React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        const isSelected = activeKeys.includes(child.key as string);
        return React.cloneElement(child, {});
      }
      return child;
    });
  };

  return (
    <nav className={`menu ${mode} ${theme}`}>
      {renderMenuItems()}
    </nav>
  );
}
export default Menu;