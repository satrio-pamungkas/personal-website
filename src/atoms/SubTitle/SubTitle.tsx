interface ISubTitle {
  children?: string
  fontWeight?: string
  fontColor?: string
  fontSize?: string
  textAlign?: string
}

const util = {
  weight: (value: string) => {
    return `font-${value}`;
  },
  color: (value: string) => {
    return `text-${value}`;
  },
  align: (value: string) => {
    return `text-${value}`;
  },
  size: (value: string) => {
    return `text-${findResponsive(value)} md:text-${value}`;
  }
}

const listSize = ['xs','sm','md','lg','xl','2xl','3xl','4xl'];

const findResponsive = (value?: string) => {
  let index: number = 0;
  for(let idx=0; idx<listSize.length; idx++) {
    if (listSize[idx] === value) {
      index = idx;
    }
  }

  if (index == 0) {
    return listSize[index];
  }
  return listSize[index-1];
}

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