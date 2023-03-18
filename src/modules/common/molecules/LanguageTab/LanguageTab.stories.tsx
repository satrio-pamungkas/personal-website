import { ComponentStory } from '@storybook/react';
import { LanguageTab } from './LanguageTab';

export default {
  title: 'Common/Molecules/LanguageTab',
  component: LanguageTab,
  argTypes: { onClick: { action: "clicked" } }
};

const Template: ComponentStory<typeof LanguageTab> = () => { 
  return (<LanguageTab />)
}

export const Primary = Template.bind({});