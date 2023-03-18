import { ComponentStory } from '@storybook/react';
import { NavbarLink } from "./NavbarLink";

export default {
  title: 'Common/Atoms/NavbarLink',
  component: NavbarLink
};

export const Primary: ComponentStory<typeof NavbarLink> = () => { 
  return (<NavbarLink label="Homepage"/>)
}