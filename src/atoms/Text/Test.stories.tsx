import { ComponentStory } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'Atoms/Text',
  component: Text
}

const Template: ComponentStory<typeof Text> = (args) => {
  return (<Text {...args} />)
}

export const Primary = Template.bind({});
Primary.args = { 
  textWeight:"font-normal",
  textColor: "text-black",
  textSize: "text-sm",
  textAlign: "text-left",
  children: "Hello World this is my text" 
};
