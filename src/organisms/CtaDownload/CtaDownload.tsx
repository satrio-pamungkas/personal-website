import { Title } from "../../atoms/Title/Title";
import { Text } from "../../atoms/Text/Text";
import { Button } from "../../atoms/Button/Button";
import { FiDownload } from "react-icons/fi";
import { useWidthSize } from "@/hooks/useWidthSize";

export const CtaDownload = () => {
  const [size] = useWidthSize("large");

  return (
    <section className="container mx-auto" data-testid="cta-download">
      <div className="flex justify-center 
        bg-neutral-800 rounded-[25px] py-8 2xl:py-12 px-8 md:px-0">
        <div className="none md:block md:w-1/5"/>
        <div className="w-full md:w-3/5">
          <Title
            textAlign="text-center"
            textColor="text-white"
            textSize="text-2xl md:text-4xl"
            textWeight="font-bold"
          >
            Want to know more about me in a formal way?
          </Title>
          <div>
            <Text
              textAlign="text-center"
              textColor="text-white"
              textSize="text-md md:text-xl"
            >
              If you are a recruiter or would like to know more about me in a professional way, I recommend downloading my resume and portfolio files.
            </Text>
          </div>
          <div className="flex flex-col md:flex-row 
            md:space-x-8 space-y-4 md:space-y-0 pt-8">
            <Button
              icon={<FiDownload/>}
              size={size}
              styleColor="secondary"
            >
              Download Resume
            </Button>
            <Button
              icon={<FiDownload/>}
              size={size}
              styleColor="secondary"
            >
              Download Portfolio
            </Button>
          </div>
        </div>
        <div className="none md:block md:w-1/5"/>
      </div>
    </section>
  )
}