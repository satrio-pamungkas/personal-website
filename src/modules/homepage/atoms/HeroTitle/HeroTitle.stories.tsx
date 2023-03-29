import { ComponentStory } from '@storybook/react';
import { HeroTitle } from './HeroTitle';

export default {
  title: 'Homepage/Atoms/HeroTitle',
  component: HeroTitle
};

const Template: ComponentStory<typeof HeroTitle> = (args) => {
  return (<HeroTitle {...args} />)
}

export const Primary = Template.bind({});
Primary.args = { bold: true, children: "Hello World", textColor: 'black' }

export const Secondary = Template.bind({});
Secondary.args = { bold: false, children: "Hello World", textColor: 'black' }