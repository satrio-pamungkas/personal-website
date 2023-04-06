import { ComponentStory } from '@storybook/react';
import { HeaderButtons } from './HeaderButtons';

export default {
  title: 'Molecules/HeaderButtons',
  component: HeaderButtons
}

const Template: ComponentStory<typeof HeaderButtons> = () => {
  return (<HeaderButtons/>)
}

export const Primary = Template.bind({});