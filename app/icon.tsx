import { AppLogo } from "@/components/app-logo/AppLogo";
import { ImageResponse } from "next/og";

export const size = {
  width: 25,
  height: 25,
};
export const contentType = "image/svg";

export default function Icon() {
  return new ImageResponse(<AppLogo backgroundColor="#fff" />, {
    ...size,
  });
}
