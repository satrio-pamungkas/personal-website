import { IText } from ".";

export const Text = ({
  textWeight = "font-normal",
  textColor = "text-black",
  textSize = "text-sm",
  textAlign = "text-left",
  children = ""
}: IText) => {

  return (
    <p 
      className={`font-barlow ` + 
      `${textWeight} ` + `${textColor} ` +
      `${textAlign} ` + `${textSize}`}
      data-testid="text"
    >
      {children}
    </p>
  );
}