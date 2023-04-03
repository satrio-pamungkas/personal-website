import { util } from "./SubTitle.util"
import { ISubTitle } from "."

export const SubTitle = ({
  children = "",
  fontWeight = "normal",
  fontColor = "",
  textAlign = "left",
  fontSize = "lg"
}: ISubTitle) => {

  return (
    <h3 
      className={`font-source-code ` +
        `${util.weight(fontWeight)} ` +
        `${fontColor} ` +
        `${util.align(textAlign)} ` +
        `${util.size(fontSize)}`}
      data-testid="subtitle">
      {children}
    </h3>
  )
}