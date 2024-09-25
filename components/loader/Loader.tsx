"use client";
import BeatLoader from "react-spinners/BeatLoader";

const override = {
  display: "block",
  margin: "100px",
};

interface IProps {
  /**
   * The color prop accepts a color hash in the format `#XXXXXX` or `#XXX`.
   *
   * @default #ec4899
   */
  color?: string;
  /**
   * The size of the loader in pixels.
   *
   * @default 50
   */
  size?: number;
}

export const Loader = (props: IProps) => {
  const { color = "#ec4899", size = 50 } = props;

  return (
    <BeatLoader
      color={color}
      cssOverride={override}
      size={size}
      aria-label="Loading Spinner"
    />
  );
};
