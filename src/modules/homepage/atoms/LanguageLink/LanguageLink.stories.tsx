import { ComponentStory } from '@storybook/react';
import { LanguageLink } from "./LanguageLink";

export default {
  title: 'Homepage/Atoms/LanguageLink',
  component: LanguageLink,
  argTypes: { onClick: { action: "clicked" } }
};

const Template: ComponentStory<typeof LanguageLink> = (args) => { 
  return (<LanguageLink {...args} />)
}

export const Primary = Template.bind({});
Primary.args = { active: true, label: "ID" }

