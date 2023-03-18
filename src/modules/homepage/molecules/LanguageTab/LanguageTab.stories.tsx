import { ComponentStory } from '@storybook/react';
import { LanguageTab } from './LanguageTab';

export default {
  title: 'Homepage/Atoms/LanguageTab',
  component: LanguageTab,
  argTypes: { onClick: { action: "clicked" } }
};

const Template: ComponentStory<typeof LanguageTab> = (args) => { 
  return (<LanguageTab />)
}

export const Primary = Template.bind({});