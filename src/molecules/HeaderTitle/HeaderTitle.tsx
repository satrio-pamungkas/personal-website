import { Title } from "../../atoms/Title/Title";

export const HeaderTitle = () => {
  return (
    <div data-testid="header-title">
      <Title bold={false} textColor="black" textSize="8xl">
        Hello I'm
      </Title>
      <Title bold={true} textColor="black" textSize="8xl">
        Software Engineer &
      </Title>
      <Title bold={true} textColor="black" textSize="8xl">
        IT Enthusiast
      </Title>
    </div>
  );
}