import { ComponentStory } from '@storybook/react';
import { CardAbout } from './CardAbout';

export default {
  title: 'Molecules/CardAbout',
  component: CardAbout
}

const Template: ComponentStory<typeof CardAbout> = () => {
  return (<CardAbout/>)
}

export const Primary = Template.bind({});