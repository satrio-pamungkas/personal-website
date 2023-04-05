import { Button } from "../../atoms/Button/Button"
import { useState, useEffect } from "react";

export const HeaderButtons = () => {
  const [size, setSize] = useState<string>("large");

  const handleResize = () => {
    if (window.innerWidth < 576) {
      setSize("normal");
    } else {
      setSize("large");
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  })

  return (
    <div 
      data-testid="header-buttons" 
      className="flex flex-row justify-between space-x-4"
    >
      <Button
        size={size}
        styleColor="primary"
      >
        Learn More
      </Button>
      <Button
        size={size}
        styleColor="primary"
      >
        Want To Reach Me ?
      </Button>
    </div>
  )
}