import { Button } from "../../atoms/Button/Button"
import { useWidthSize } from "../../hooks/useWidthSize";

export const HeaderButtons = () => {
  const [size] = useWidthSize("large");

  return (
    <div 
      data-testid="header-buttons" 
      className="flex flex-col md:flex-row justify-between 
        md:space-x-4 space-y-4 md:space-y-0"
    >
      <Button
        size={size}
        styleColor="primary"
        onClick={() => {
          const element = document.getElementById("about");
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Learn More
      </Button>
      <Button
        size={size}
        styleColor="primary"
        onClick={() => {
          const element = document.getElementById("contact");
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Want To Reach Me ?
      </Button>
    </div>
  )
}