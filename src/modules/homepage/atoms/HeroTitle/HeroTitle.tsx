interface IHeroTitle {
  children?: string | JSX.Element
  textColor?: string
  bold: boolean
}

export const HeroTitle = (props: IHeroTitle) => {
  return (
    <h1 
      data-testid="hero-title" 
      className={`font-barlow text-3xl ` + 
      `${props.bold ? 'font-bold' : 'font-normal'} ` +
      `text-${props.textColor}`}
    >
      {props.children}
    </h1>
  )
}