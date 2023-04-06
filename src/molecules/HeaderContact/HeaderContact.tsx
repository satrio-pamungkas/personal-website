import { Title } from "../../atoms/Title/Title"
import { Text } from "../../atoms/Text/Text"

export const HeaderContact = () => {
  return (
    <div data-testid="header-contact">
      <Title
        textAlign="text-center"
        textColor="text-white"
        textSize="text-3xl"
        textWeight="font-bold"
      >
        Several Ways to Reach Me
      </Title>
      <Text
        textAlign="text-center"
        textColor="text-white"
        textWeight="font-normal"
        textSize="text-lg"
      >
        You can reach me on these platforms, feel free to chat.
      </Text>
    </div>
  )
}