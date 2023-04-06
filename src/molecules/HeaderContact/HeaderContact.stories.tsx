import { ComponentStory } from '@storybook/react';
import { HeaderContact } from './HeaderContact';

export default {
  title: 'Molecules/HeaderContact',
  component: HeaderContact
}

const Template: ComponentStory<typeof HeaderContact> = () => {
  return (<HeaderContact/>)
}

export const Primary = Template.bind({});