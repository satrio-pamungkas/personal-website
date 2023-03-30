import { ComponentStory } from '@storybook/react';
import { NavbarList } from './NavbarList';

export default {
  title: 'Molecules/NavbarList',
  component: NavbarList
};

const linkLabels = [
  { id: 1, label: "Homepage", link: "/", active: true },
  { id: 2, label: "Projects", link: "/projects", active: false },
  { id: 3, label: "Publications", link: "/publications" , active: false },
  { id: 4, label: "Resume", link: "/resume", active: false },
  { id: 5, label: "About Me", link: "/about", active: false }
];

const Template: ComponentStory<typeof NavbarList> = (args) => { 
  return (<NavbarList {...args} />)
}

export const Primary = Template.bind({});
Primary.args = { list: linkLabels }