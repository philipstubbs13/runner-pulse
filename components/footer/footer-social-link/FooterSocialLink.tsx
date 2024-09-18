import { PropsWithChildren, ReactNode } from "react";

interface IProps {
  /**
   * The content (usually an icon) displayed as the visible part of the link.
   */
  children: ReactNode;
  /**
   * The URL that the link points to. This should be an external link,
   * typically to social media or other external resources.
   */
  href: string;
  /**
   * A hidden label for screen readers to provide an accessible description of the link’s purpose.
   */
  label: string;
}

export const FooterSocialLink = (props: PropsWithChildren<IProps>) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-200"
    >
      {props.children}
      <span className="sr-only">{props.label}</span>
    </a>
  );
};
