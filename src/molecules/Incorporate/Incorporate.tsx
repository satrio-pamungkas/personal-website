import Image from "next/image";
import Logo from "../../../public/sahud-logo.png";
import { Text } from "../../atoms/Text/Text";

export const Incorporate = () => {
  return (
    <div
      className="flex flex-row space-x-8"
      data-testid="incorporate">
      <Image
        data-testid="image" 
        src={Logo} 
        alt="Sahud Logo" 
      />
      <div className="border-r-2 border-white"/>
      <Text
        textAlign="text-left"
        textColor="text-white"
        textSize="text-lg"
        textWeight="font-normal"
      >
        Please Note, if you are contact me to hire me as a freelance. Then, just contact my incorporate (Sahud Agency).
      </Text>
    </div>
  );
}