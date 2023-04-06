import { ComponentStory } from '@storybook/react';
import { PersonalSummary } from './PersonalSummary';

export default {
  title: 'Organisms/PersonalSummary',
  component: PersonalSummary
}

const Template: ComponentStory<typeof PersonalSummary> = () => {
  return (<PersonalSummary/>)
}

export const Primary = Template.bind({});