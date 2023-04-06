import { ButtonIcon } from "../../atoms/ButtonIcon/ButtonIcon";
import { platformLists } from "./PlatformButtons.util";

export const PlatformButtons = () => {
  return (
    <div 
      className="flex flex-row justify-center space-x-2 md:space-x-16"
      data-testid="platform-buttons"
    >
      {platformLists.map((item) => (
        <ButtonIcon
          key={item.id}
          icon={item.icon}
        />
      ))}
    </div>
  );
}