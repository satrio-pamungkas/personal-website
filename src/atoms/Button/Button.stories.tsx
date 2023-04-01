import { ComponentStory } from '@storybook/react';
import { Bs0CircleFill } from 'react-icons/bs';
import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    styleColor: {
      options: ['primary','secondary'],
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['normal','large'],
      control: {
        type: 'select'
      }
    }
  }
}

const Template: ComponentStory<typeof Button> = (args) => {
  return (<Button {...args} />)
}

export const Primary = Template.bind({});
Primary.args = {
  children: "Placeholder",
  styleColor: "primary",
  size: "normal",
  icon: <Bs0CircleFill/>,
  onClick() {
    console.log("Clicked")
  },
}