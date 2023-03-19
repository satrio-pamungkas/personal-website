import { ComponentStory } from '@storybook/react';
import { Navbar } from './Navbar';

export default {
  title: 'Common/Organisms/Navbar',
  component: Navbar
};

const Template: ComponentStory<typeof Navbar> = () => { 
  return (<Navbar/>)
}

export const Primary = Template.bind({});