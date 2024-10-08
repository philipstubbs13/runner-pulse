import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Runner Pulse",
    short_name: "RunnerPulse",
    description: "Track your Runner Journey",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#ec4899",
    background_color: "#ec4899",
  };
}
