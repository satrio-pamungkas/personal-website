import { SubTitle } from "../../atoms/SubTitle/SubTitle";
import { Text } from "../../atoms/Text/Text";

export const HeaderSubTitle = () => {
  return (
    <div data-testid="header-sub-title">
      <div className="flex flex-row text-white space-x-2 md:space-x-6 pb-0 md:pb-8">
        <SubTitle 
          textColor="text-white"
          textSize="text-lg md:text-2xl 2xl:text-3xl" 
        >
          Back-End
        </SubTitle>
        <p className="text-lg md:text-2xl 2xl:text-3xl">|</p>
        <SubTitle 
          textColor="text-white"
          textSize="text-lg md:text-2xl 2xl:text-3xl"
        >
          Front-End
        </SubTitle>
        <p className="text-lg md:text-2xl 2xl:text-3xl">|</p>
        <SubTitle  
          textColor="text-white"
          textSize="text-lg md:text-2xl 2xl:text-3xl"
        >
          Android
        </SubTitle>
      </div>
      <div>
        <Text 
          textColor="text-white" 
          textSize="text-md md:text-xl"
        >
          My specialization is in software development, but I also have an interest in other technologies. I often work as a freelancer through Sahud Agency.
        </Text>
      </div>
    </div>
  );
}