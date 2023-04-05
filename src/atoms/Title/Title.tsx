import { ITitle } from "."

export const Title = ({
  children = "",
  textWeight = "font-normal",
  textColor = "text-black",
  textAlign = "text-left",
  textSize = "text-4xl"
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