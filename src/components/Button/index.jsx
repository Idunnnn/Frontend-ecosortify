import clsx from "clsx";
import { Icon } from "@iconify/react";
export default function Button({ variant = "primary-lg", children, className, ...props }) {
  const variants = {
    rounded_primary_sm: "r-primary__sm",
    rounded_primary_lg: "r-primary__lg",

    rounded_secondary_sm: "r-secondary__sm body-7",
    rounded_secondary_lg: "r-secondary__lg body-6",

    primary_sm: "primary__sm body-7",
    primary_lg: "primary__lg heading-6",

    secondary_sm: "secondary__sm body-7",
    secondary_lg: "secondary__lg heading-6",

    google: "btn-google",
  };

  return (
    <button className={clsx(className, variants[variant])} {...props}>
      {variant === "google" && <Icon icon="devicon:google" width={"28"}></Icon>}
      {children}
    </button>
  );
}
