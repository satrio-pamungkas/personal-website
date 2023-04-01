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
  children: "Placeholder Text",
  fontColor: "black",
  fontSize: "sm",
  fontWeight: "normal",
  textAlign: "left" 
};
