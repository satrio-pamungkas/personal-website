interface IText {
  children?: string
  fontWeight?: string
  fontColor?: string
  fontSize?: string
  textAlign?: string 
}

export const Text = ({
  fontWeight = "normal",
  fontColor = "black",
  fontSize = "sm",
  textAlign = "left",
  children = ""
}: IText) => {

  return (
    <p 
      className={`font-barlow ` + `font-${fontWeight} ` + 
      `text-${fontColor} ` + `text-${textAlign} ` +
      `text-${fontSize}`}
      data-testid="text"
    >
      {children}
    </p>
  );
}