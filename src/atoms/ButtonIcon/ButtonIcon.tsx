import { IButtonIcon } from ".";

export const ButtonIcon = (props: IButtonIcon) => {
  return (
    <button 
      className="p-4 rounded-lg bg-neutral-600 
        hover:bg-neutral-800"
      data-testid="button-icon"
      onClick={props.onClick}
    >
      {props.icon}
    </button>
  );
}