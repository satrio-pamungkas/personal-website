import { ComponentStory } from '@storybook/react';
import { NavbarList } from './NavbarList';

export default {
  title: 'Common/Molecules/NavbarList',
  component: NavbarList
};

const linkLabels = [
  { id: 1, label: "Homepage", link: "/" },
  { id: 2, label: "Projects", link: "/projects" },
  { id: 3, label: "Publications", link: "/publications" },
  { id: 4, label: "Resume", link: "/resume" },
  { id: 5, label: "About Me", link: "/about" }
];

const Template: ComponentStory<typeof NavbarList> = (args) => { 
  return (<NavbarList {...args} />)
}

export const Primary = Template.bind({});
Primary.args = { list: linkLabels }