import { ReactNode } from "react"

interface IButton {
  children?: string
  icon?: ReactNode
  onClick?: () => void
  styleColor?: string
  size?: string
}

interface IThemes {
  primary: string 
  secondary: string
}

interface ISizes {
  small?: string
  normal: string 
  large?: string
}


export {
  IButton, IThemes, ISizes
}
