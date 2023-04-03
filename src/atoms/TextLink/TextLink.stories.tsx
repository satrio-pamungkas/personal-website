import { ComponentStory } from '@storybook/react';
import { TextLink } from './TextLink';

export default {
  title: 'Atoms/TextLink',
  component: TextLink
}

const Template: ComponentStory<typeof TextLink> = (args) => {
  return (<TextLink {...args} />)
}

export const Default = Template.bind({});
Default.args = { 
  children: "Placeholder Text",
  fontColor: "text-black",
  link: ""
};
