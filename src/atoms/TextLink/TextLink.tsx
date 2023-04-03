import Link from "next/link";
import { ITextLink } from ".";

export const TextLink = ({
  children = "",
  link = "",
  fontColor = "text-black"
}: ITextLink) => {
  return (
    <Link
      className={`font-medium font-barlow underline underline-offset-8 ` + 
        `text-sm md:text-md ` + `${fontColor}`} 
      data-testid="text-link"
      href={link}
    >
      {children}
    </Link>
  );
}