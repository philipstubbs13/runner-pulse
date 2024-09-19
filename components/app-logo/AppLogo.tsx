import clsx from "clsx";

interface IProps {
  /**
   * A string that sets the background color of the logo.
   * By default, no background color is applied,
   * allowing the logo to render with a transparent background.
   */
  backgroundColor?: string;
  /**
   * Size of logo. Defaults to `large`.
   */
  size?: "small" | "large";
}

export const AppLogo = (props: IProps) => {
  const { size = "large" } = props;

  return (
    <svg
      className={clsx({
        "w-16 h-16 sm:w-20 sm:h-20": size === "large",
        "w-8 h-8": size === "small",
      })}
      data-testid="app-logo"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <path
        d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 12H22M12 2V8.5M2 12H8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
