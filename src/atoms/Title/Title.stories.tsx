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
  bold: true, 
  children: "Hello World", 
  textColor: 'black',
  textAlign: 'left',
  textSize: '2xl' 
}