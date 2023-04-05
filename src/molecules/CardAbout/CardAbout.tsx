import { Button } from "../../atoms/Button/Button";
import Image from "next/image";
import Illustration from "../../../public/card-illustration.png";
import { Text } from "../../atoms/Text/Text";
import { useWidthSize } from "../../hooks/useWidthSize";

export const CardAbout = () => {
  const [size] = useWidthSize("large");

  return (
    <div 
      className="bg-neutral-800 rounded-[25px] 
        relative z-0 flex flex-row justify-end h-full" 
      data-testid="card-about"
    >
      <Image
        className="rounded-r-[25px] right-0 h-96 sm:h-80" 
        src={Illustration} 
        alt="Card Illustration" 
      />
      <div className="rounded-[25px]
        absolute inset-y-0 left-0 w-full
        bg-gradient-to-r from-neutral-800 to-white/10"
      >
        <div className="flex flex-col h-full md:w-1/2 lg:w-2/5 p-12 space-y-8">
          <Text
            textAlign="text-left"
            textColor="text-white"
            textSize="text-md md:text-xl"
            textWeight="font-normal"
          >
            My name is <b>Muhammad Raihan Satrio Putra Pamungkas</b>, you can call me either <b>Raihan</b> or <b>Satrio</b>
          </Text>
          <Text
            textAlign="text-left"
            textColor="text-white"
            textSize="text-md md:text-xl"
            textWeight="font-normal"
          >
            I was graduated from Software Engineering  degree in Indonesian University of Education, in January 2023
          </Text>
          <div className="w-1/2 xl:w-1/3">
            <Button
              size={size}
              styleColor="primary"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}