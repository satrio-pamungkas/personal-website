import { ComponentStory } from '@storybook/react';
import { NavbarLink } from "./NavbarLink";

export default {
  title: 'Common/Atoms/NavbarLink',
  component: NavbarLink
};

const Template: ComponentStory<typeof NavbarLink> = (args) => {
  return (<NavbarLink {...args} />)
}

export const Primary = Template.bind({});
Primary.args = { label: "Homepage", active: true }

export const Secondary = Template.bind({});
Secondary.args = { label: "Homepage", active: false }