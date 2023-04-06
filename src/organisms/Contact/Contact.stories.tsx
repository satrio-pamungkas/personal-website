import { ComponentStory } from '@storybook/react';
import { Contact } from './Contact';

export default {
  title: 'Organisms/Contact',
  component: Contact
}

const Template: ComponentStory<typeof Contact> = () => {
  return (<Contact/>)
}

export const Primary = Template.bind({});