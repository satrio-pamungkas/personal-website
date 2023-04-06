import { useState, useEffect } from "react";

export const useWidthSize = (initial: string) => {
  const [size, setSize] = useState<string>(initial);

  const handleResize = () => {
    if (window.innerWidth < 576) {
      setSize("normal");
    } else {
      setSize("large");
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return [size];
}