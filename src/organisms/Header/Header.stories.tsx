import { ComponentStory } from '@storybook/react';
import { Header } from './Header';

export default {
  title: 'Organisms/Header',
  component: Header
}

const Template: ComponentStory<typeof Header> = () => {
  return (<Header/>)
}

export const Primary = Template.bind({});