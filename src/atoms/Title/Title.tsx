import { ITitle } from "."

export const Title = ({
  children = "",
  textWeight = "normal",
  textColor = "",
  textAlign = "left",
  textSize = "lg"
}: ITitle) => {

  return (
    <h1 
      data-testid="hero-title" 
      className={`font-barlow py-1 ` + 
      `${textWeight} ` + `${textColor} ` +
      `${textAlign} ` + `${textSize}`}
    >
      {children}
    </h1>
  )
}