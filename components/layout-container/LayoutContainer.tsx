import { PropsWithChildren } from "react";

export const LayoutContainer = (props: PropsWithChildren) => {
  return (
    <div className="mx-auto md:p-4 bg-gradient-to-br from-blue-100 to-pink-100 min-h-screen">
      {props.children}
    </div>
  );
};
