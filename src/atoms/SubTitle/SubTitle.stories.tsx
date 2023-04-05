import { ComponentStory } from '@storybook/react';
import { SubTitle } from './SubTitle';

export default {
  title: 'Atoms/SubTitle',
  component: SubTitle
}

const Template: ComponentStory<typeof SubTitle> = (args) => {
  return (<SubTitle {...args} />)
}

export const Default = Template.bind({});
Default.args = { 
  children: "Hello World",
  textAlign: "text-left",
  textColor: "text-white",
  textSize: "text-2xl",
  textWeight: "font-normal"
};
