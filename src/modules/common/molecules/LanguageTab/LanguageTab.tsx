import { LanguageLink } from "../../atoms/LanguageLink/LanguageLink";
import { useState } from "react";

export const LanguageTab = () => {
  const [status, setStatus] = useState<boolean>(true);

  const updateStatus = (data: string) => {
    setStatus(!status);
  }

  return (
    <div className="flex flex-row" data-testid="language-tab">
      <LanguageLink 
        active={status} 
        label="ID" 
        onClick={updateStatus} 
      />
      &nbsp;
      /
      &nbsp;
      <LanguageLink 
        active={!status} 
        label="EN" 
        onClick={updateStatus} 
      />
    </div>
  );
}