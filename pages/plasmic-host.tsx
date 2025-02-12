import * as React from "react";
import {
  PlasmicCanvasHost,
  registerComponent,
} from "@plasmicapp/react-web/lib/host";
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";

registerComponent(MenuItem, {
  name: "MenuItem",
  displayName: "Menu Item",
  props: {
    label: "string",
    isSelected: "boolean",
  },
  importPath: "../components/MenuItem",
});

registerComponent(Menu, {
  name: "Menu",
  props: {
    mode: "string",
    theme: "string",
    selectedKeys: { type: "array", defaultValue: [2] },
    defaultSelectedKeys: { type: "array", defaultValue: [2] },
    children: {
      type: "slot",
      // Only allow MenuItem in children slot
      allowedComponents: ["MenuItem"],

      // Default slot contents: two MenuItems
      defaultValue: [
        {
          type: "component",
          name: "MenuItem",
          props: {
            label: "Menu item 1",
            isSelected: false,
          },
        },
        {
          type: "component",
          name: "MenuItem",
          props: {
            label: "Menu item 2",
            isSelected: true,
          },
        },
      ],
    },
  },
  importPath: "../components/Menu",
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
