import { ComponentStory } from '@storybook/react';
import { Navbar } from './Navbar';

export default {
  title: 'Organisms/Navbar',
  component: Navbar
};

const Template: ComponentStory<typeof Navbar> = () => { 
  return (<Navbar/>)
}

export const Primary = Template.bind({});