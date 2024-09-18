import { Routes } from "@/utils/router/Routes.constants";
import Link from "next/link";

interface IProps {
  /**
   * The destination URL the link navigates to.
   */
  href: Routes;
  /**
   * The text displayed as the link.
   */
  label: string;
}

export const FooterQuickLink = (props: IProps) => {
  return (
    <Link href={props.href} className="text-sm hover:underline">
      {props.label}
    </Link>
  );
};
