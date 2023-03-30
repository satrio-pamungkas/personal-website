interface Title {
  children?: string | JSX.Element
  textColor?: string
  textSize?: string
  textAlign?: string
  bold: boolean
}

const listSize = ['xs','sm','md','lg','xl','2xl','3xl','4xl'];

const findResponsive = (list: string[], value?: string) => {
  let index: number = 0;
  for(let idx=0; idx<list.length; idx++) {
    if (list[idx] === value) {
      index = idx;
    }
  }

  return list[index-2];
}

export const Title = (props: Title) => {
  return (
    <h1 
      data-testid="hero-title" 
      className={`font-barlow ` + 
      `${props.bold ? 'font-bold' : 'font-normal'} ` +
      `text-${props.textColor} ` +
      `md:text-${props.textSize} ` + `text-${findResponsive(listSize, props.textSize)} ` +
      `text-${props.textAlign}`}
    >
      {props.children}
    </h1>
  )
}