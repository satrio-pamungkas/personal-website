import { HeaderTitle } from "../../molecules/HeaderTitle/HeaderTitle";
import { HeaderSubTitle } from "../../molecules/HeaderSubTitle/HeaderSubTitle";
import { HeaderButtons } from "../../molecules/HeaderButtons/HeaderButtons";
import Image from "next/image";
import Illustration from "../../../public/header-illustration.png";

export const Header = () => {
  return (
    <section 
      className="container mx-auto py-16 md:py-32 mt-8" 
      data-testid="header"
    >
      <div className="flex flex-col md:flex-row md:space-x-4 justify-center">
        <div className="md:w-1/2">
          <Image 
            data-testid="image" 
            src={Illustration} 
            alt="Header Illustration" 
          />
        </div>
        <div className="md:w-1/2 px-4 md:px-0 py-8 md:py-0 space-y-4">
          <HeaderTitle/>
          <HeaderSubTitle/>
          <div className="md:w-2/3 py-8">
            <HeaderButtons/>
          </div>
        </div>
      </div>
    </section>
  )
}