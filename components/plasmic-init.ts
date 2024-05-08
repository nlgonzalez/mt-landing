import { registerComponent } from "@plasmicapp/react-web/lib/host";

import React from "react";

const MenuItem = ({ label }) => {
  return <div className="menu-item">{label}</div>;
};

const Menu = ({ mode, theme, selectedKeys, defaultSelectedKeys, children }) => {
  const [activeKeys, setActiveKeys] = useState(defaultSelectedKeys);

  useEffect(() => {
    if (selectedKeys) {
      setActiveKeys(selectedKeys);
    }
  }, [selectedKeys]);

  const handleItemClick = (key) => {
    if (!selectedKeys) {
      // Only update if controlled externally
      setActiveKeys([key]);
    }
    console.log(`Item with key ${key} clicked`);
  };

  const renderMenuItems = () => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const isSelected = activeKeys.includes(child.key);
        return React.cloneElement(child, {
          onClick: () => handleItemClick(child.key),
          isSelected,
        });
      }
      return child;
    });
  };

  return <nav className={`menu ${mode} ${theme}`}>{renderMenuItems()}</nav>;
};

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
