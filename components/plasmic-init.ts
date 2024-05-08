import { registerComponent } from "@plasmicapp/react-web/lib/host";

import React from "react";

interface MenuItemProps {
  label: string;
  onClick: () => void;
  isSelected?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick, isSelected }) => {
  const activeClass = isSelected ? 'menu-item-active' : '';
  return (
    <div className={`menu-item ${activeClass}`} onClick={onClick}>
      {label}
    </div>
  );
}


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
        return React.cloneElement(child, {
          onClick: () => handleItemClick(child.key as string),
          isSelected
        });
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

registerComponent(MenuItem, {
  name: 'MenuItem',
  displayName: 'Menu Item',
  props: {
    label: 'string',
  }
});

registerComponent(Menu, {
  name: 'Menu',
  props: {
    mode: 'string',
    theme: 'string',
    selectedKeys: 'object',
    defaultSelectedKeys: 'object',
    children: {
      type: 'slot',
      // Only allow MenuItem in children slot
      allowedComponents: ['MenuItem'],

      // Default slot contents: two MenuItems
      defaultValue: [
        {
          type: 'component',
          name: 'MenuItem',
          props: {
            key: 'key1',
            children: {
              type: 'text',
              value: 'Menu Option 1'
            }
          }
        },
        {
          type: 'component',
          name: 'MenuItem',
          props: {
            key: 'key2',
            children: {
              type: 'text',
              value: 'Menu Option 2'
            }
          }
        }
      ]
    }
  }
});

export { Menu, MenuItem };
