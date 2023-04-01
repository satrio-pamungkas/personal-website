import { ComponentStory } from '@storybook/react';
import { Bs0CircleFill } from 'react-icons/bs';
import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button
}

const Template: ComponentStory<typeof Button> = (args) => {
  return (<Button {...args} />)
}

export const Primary = Template.bind({});
Primary.args = {
  children: "Placeholder",
  color: "blue-800",
  icon: <Bs0CircleFill/>,
  onClick() {
    console.log("Clicked")
  },
}