import {
  Avatar as UiAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import clsx from "clsx";

interface IProps {
  /**
   * The alternative text for the avatar image.
   * This is useful for accessibility and is displayed when the image is not loaded.
   */
  alt?: string;
  /**
   * Optional className used to override avatar styles if needed.
   */
  className?: string;
  /**
   * The URL for the avatar image.
   * If no image is provided, the component displays the user's initials as a fallback.
   */
  image?: string;
  /**
   * The full name of the user.
   * Used to generate the initials that are displayed when no image is available.
   * Defaults to an empty string.
   */
  name?: string;
}

export const Avatar = (props: IProps) => {
  const { alt = "", className = "", name = "" } = props;

  return (
    <UiAvatar
      className={clsx({
        "cursor-pointer": true,
        [className]: className,
      })}
      data-testid="ui-avatar"
    >
      <AvatarImage alt={alt} src={props.image} />
      <AvatarFallback>
        {name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </UiAvatar>
  );
};
