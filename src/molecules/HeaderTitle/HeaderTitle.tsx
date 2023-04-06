import { Title } from "../../atoms/Title/Title";

export const HeaderTitle = () => {
  return (
    <div data-testid="header-title">
      <Title 
        textColor="text-white" 
        textSize="text-3xl md:text-6xl 2xl:text-7xl" 
        textWeight="font-normal"
      >
        Hello I&lsquo;m
      </Title>
      <Title 
        textColor="text-white" 
        textSize="text-3xl md:text-6xl 2xl:text-7xl" 
        textWeight="font-bold"
      >
        Software Engineer &
      </Title>
      <Title 
        textColor="text-white" 
        textSize="text-3xl md:text-6xl 2xl:text-7xl" 
        textWeight="font-bold"
      >
        IT Enthusiast
      </Title>
    </div>
  );
}