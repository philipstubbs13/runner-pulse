import { PropsWithChildren } from "react";

export const GradientContainer = (props: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-pink-500 text-white">
      {props.children}
    </div>
  );
};
