import { IText } from ".";

export const Text = ({
  textWeight = "font-normal",
  textColor = "text-black",
  textSize = "text-sm",
  textAlign = "text-left",
  children = "",
  underline = false
}: IText) => {

  return (
    <p 
      className={`font-barlow ` + 
      `${textWeight} ` + `${textColor} ` +
      `${textAlign} ` + `${textSize} ` +
      `${underline ? "underline underline-offset-8" : ""}`}
      data-testid="text"
    >
      {children}
    </p>
  );
}