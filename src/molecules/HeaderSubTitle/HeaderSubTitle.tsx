import { SubTitle } from "../../atoms/SubTitle/SubTitle";
import { Text } from "../../atoms/Text/Text";

export const HeaderSubTitle = () => {
  return (
    <div data-testid="header-sub-title">
      <div className="flex flex-row text-white space-x-2 md:space-x-6">
        <SubTitle 
          textColor="text-white"
          textSize="text-lg md:text-3xl" 
        >
          Back-End
        </SubTitle>
        <p className="text-lg md:text-3xl">|</p>
        <SubTitle 
          textColor="text-white"
          textSize="text-lg md:text-3xl"
        >
          Front-End
        </SubTitle>
        <p className="text-lg md:text-3xl">|</p>
        <SubTitle  
          textColor="text-white"
          textSize="text-lg md:text-3xl"
        >
          Android
        </SubTitle>
      </div>
      <div>
        <Text 
          textColor="text-white" 
          textSize="text-md md:text-xl"
        >
          My specialization on software development, but also have several interests on other technologies. I often open freelance via Sahud Agency
        </Text>
      </div>
    </div>
  );
}