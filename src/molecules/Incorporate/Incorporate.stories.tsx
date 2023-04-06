import { ComponentStory } from '@storybook/react';
import { Incorporate } from './Incorporate';

export default {
  title: 'Molecules/Incorporate',
  component: Incorporate
}

const Template: ComponentStory<typeof Incorporate> = () => {
  return (<Incorporate/>)
}

export const Primary = Template.bind({});