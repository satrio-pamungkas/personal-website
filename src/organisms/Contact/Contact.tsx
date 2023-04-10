import { HeaderContact } from "../../molecules/HeaderContact/HeaderContact";
import { Incorporate } from "../../molecules/Incorporate/Incorporate";
import { PlatformButtons } from "../../molecules/PlatformButtons/PlatformButtons";

export const Contact = () => {
  return (
    <section
      id="contact" 
      className="container mx-auto px-4 md:px-16 
        py-8 md:py-32 flex flex-row" 
      data-testid="contact"
    >
      <div className="lg:w-1/5"/>
      <div className="lg:w-3/5 space-y-8 md:space-y-16">
        <HeaderContact/>
        <PlatformButtons/>
        <Incorporate/>
      </div>
      <div className="lg:w-1/5"/>
    </section>
  );
}