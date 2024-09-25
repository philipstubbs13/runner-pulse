import { AppLogo } from "../app-logo/AppLogo";

export const PageHeading = () => {
  return (
    <div
      className={
        "flex items-center gap-2 text-4xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-pink-500 text-transparent bg-clip-text"
      }
      data-testid="page-heading-container"
    >
      <AppLogo size={"small"} data-testid="app-logo" />
      <h1 className={"text-4xl font-bold transition-colors duration-300"}>
        Runner Pulse
      </h1>
    </div>
  );
};
