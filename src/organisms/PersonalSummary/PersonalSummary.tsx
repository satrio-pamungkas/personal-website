import { CardAbout } from "../../molecules/CardAbout/CardAbout"
import { Text } from "../../atoms/Text/Text"

export const PersonalSummary = () => {
  return (
    <section
      id="about" 
      className="container mx-auto py-8 2xl:py-12 px-4 md:px-16"
      data-testid="personal-summary"
    >
      <div className="py-8">
        <Text
          textAlign="text-left"
          textColor="text-white"
          textSize="text-xl md:text-3xl"
          textWeight="font-bold"
          underline={true}
        >
          About Me
        </Text>
      </div>
      <CardAbout/>
    </section>
  )
}