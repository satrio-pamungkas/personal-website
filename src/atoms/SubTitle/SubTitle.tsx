import { ISubTitle } from "."

export const SubTitle = ({
  children = "",
  textWeight = "font-normal",
  textColor = "text-black",
  textAlign = "text-left",
  textSize = "text-2xl"
}: ISubTitle) => {

  return (
    <h3 
      className={`font-source-code ` +
      `${textWeight} ` + `${textColor} ` +
      `${textAlign} ` + `${textSize}`}
      data-testid="subtitle">
      {children}
    </h3>
  )
}