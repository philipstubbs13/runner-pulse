import React from "react";
import type { Preview } from "@storybook/react";

import "../app/globals.css";
import { AuthProvider } from "../components/auth-provider/AuthProvider";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: "dark", value: "#333" },
        { name: "light", value: "#FFF" },
      ],
      default: "light",
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <main>
        <AuthProvider>
          <Story />
        </AuthProvider>
      </main>
    ),
  ],
};

export default preview;
