import { registerComponent } from "@plasmicapp/react-web/lib/host";
import Menu from "./Menu"
import MenuItem from "./MenuItem"

registerComponent(MenuItem, {
  name: 'MenuItem',
  displayName: 'Menu Item',
  props: {
    label: 'string',
    isSelected: 'boolean'
  },
  importPath: './components/MenuItem',
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
  },
  importPath: './components/Menu',
});

