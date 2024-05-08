import * as React from 'react';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/react-web/lib/host';
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


// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// registerComponent(...)

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
