import { ComponentStory } from '@storybook/react';
import { Title } from './Title';

export default {
  title: 'Atoms/Title',
  component: Title
};

const Template: ComponentStory<typeof Title> = (args) => {
  return (<Title {...args} />)
}

export const Primary = Template.bind({});
Primary.args = { 
  children: "Hello World",
  textAlign: "text-left",
  textColor: "text-black",
  textSize: "text-8xl",
  textWeight: "font-bold"
}