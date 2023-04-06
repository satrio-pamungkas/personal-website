import { ComponentStory } from '@storybook/react';
import { PlatformButtons } from './PlatformButtons';

export default {
  title: 'Molecules/PlatformButtons',
  component: PlatformButtons
}

const Template: ComponentStory<typeof PlatformButtons> = () => {
  return (<PlatformButtons/>)
}

export const Primary = Template.bind({});