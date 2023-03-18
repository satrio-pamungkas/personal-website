interface ILanguageLink {
  label: string
  active: boolean
  onClick: (data: string) => void
}

export const LanguageLink = (props: ILanguageLink) => {
  const sendLabel = () => {
    props.onClick(props.label)
  }

  if (props.active) {
    return (
      <div 
        onClick={sendLabel} 
        data-testid="language-link" 
        className="font-bold"
      >
          {props.label}
      </div>
    )
  } else {
    return (
      <div 
        onClick={sendLabel} 
        data-testid="language-link" 
        className="font-regular"
      >
        {props.label}
      </div>
    )
  }
}