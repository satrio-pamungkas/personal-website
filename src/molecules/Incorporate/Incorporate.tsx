import Image from "next/image";
import Logo from "../../../public/sahud-logo.png";
import { Text } from "../../atoms/Text/Text";

export const Incorporate = () => {
  return (
    <div
      className="flex flex-col items-center md:items-stretch 
        md:flex-row md:space-x-8 space-y-4 md:space-y-0"
      data-testid="incorporate"
    >
      <Image
        data-testid="image" 
        src={Logo} 
        alt="Sahud Logo" 
      />
      <div className="border-r-2 border-white"/>
      <Text
        textAlign="text-center md:text-left"
        textColor="text-white"
        textSize="text-md md:text-lg"
        textWeight="font-normal"
      >
        Please Note, if you are contact me to hire me as a freelance. Then, just contact my incorporate (Sahud Agency).
      </Text>
    </div>
  );
}