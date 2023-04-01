import React from "react"
import { ReactNode } from "react"

interface IButton {
  children?: string
  icon?: ReactNode
  color?: string
  onClick?: () => void
}

export const Button = ({
  children = "",
  color = "blue-800",
  icon,
  onClick
}: IButton) => {
  return (
    <button 
      className={`font-oswald font-normal uppercase px-4 py-2 ` +
      `text-white ` + `bg-${color}`}
      data-testid="button"
      type="button"
      onClick={onClick}
    >
      <span>
        <React.Fragment>
          {icon}
        </React.Fragment>
        <React.Fragment>
          {children}
        </React.Fragment>
      </span>
    </button>
  )
}