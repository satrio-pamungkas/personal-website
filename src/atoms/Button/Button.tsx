import React from "react"
import { IButton } from ".";
import { sizes, themes } from "./Button.util";

type ObjectKeyStyle = keyof typeof themes;
type ObjectKeySize = keyof typeof sizes;

export const Button = ({
  children = "",
  styleColor = "primary",
  size = "normal",
  icon,
  onClick
}: IButton) => {

  return (
    <button 
      className={`font-oswald font-normal uppercase px-4 py-3 ` +
        `text-white w-full ` + 
        `${themes[styleColor as ObjectKeyStyle]} ` +
        `${sizes[size as ObjectKeySize]}`}
      data-testid="button"
      type="button"
      onClick={onClick}
    >
      <div className="flex flex-row justify-center items-center
        space-x-2">
        <div>
          {icon}
        </div>
        <div>
          {children}
        </div>
      </div>
    </button>
  )
}