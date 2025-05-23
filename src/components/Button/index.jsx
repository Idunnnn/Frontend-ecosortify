import clsx from "clsx";
import { Icon } from "@iconify/react";
export default function Button({ variant = "primary-lg", children, className, ...props }) {
  const variants = {
    rounded_primary_sm:
      "rounded-full bg-[var(--btn-primary)] duration-200 transition text-white hover:bg-[var(--btn-primary-hover)] active:bg-[var(--btn-primary-hover)] py-3 px-6 text-base font-semibold ",
    rounded_primary_lg:
      "rounded-full bg-[var(--btn-primary)] duration-200 transition text-white hover:bg-[var(--btn-primary-hover)] active:bg-[var(--btn-primary-hover)] py-4 px-8 heading-6",

    rounded_secondary_sm:
      "rounded-full bg-none text-white border border-white duration-200 transition hover:text-[var(--btn-primary-hover)] hover:border-[var(--btn-primary-hover)] active:bg-[var(--btn-primary-hover)] py-3 px-6 text-base font-semibold ",
    rounded_secondary_lg:
      "rounded-full bg-none text-white border border-white duration-200 transition hover:text-[var(--btn-primary-hover)] hover:border-[var(--btn-primary-hover)] active:bg-[var(--btn-primary-hover)] py-4 px-8 text-base font-semibold ",

    primary_sm:
      "bg-[var(--btn-primary)] duration-200 transition text-white hover:bg-[var(--btn-primary-hover)] active:bg-[var(--btn-primary-hover)] rounded-lg py-3 px-6 text-base font-semibold",
    primary_lg:
      "bg-[var(--btn-primary)] duration-200 transition text-white hover:bg-[var(--btn-primary-hover)] active:bg-[var(--btn-primary-hover)] rounded-lg py-4 min-w-[170px] heading-6",

    google:
      "shadow-sm rounded-lg duration-50 py-4 transition hover:bg-gray-50 active:bg-gray-100 border border-[#d9d9d9] active:text-blue-600 flex w-full items-center justify-center gap-3",
  };


  return (
    <button className={clsx(className, variants[variant])} {...props}>
      {variant === "google" && <Icon icon="devicon:google" width={"28"}></Icon>}
      {children}
    </button>
  );
}
