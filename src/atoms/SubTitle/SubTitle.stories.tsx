import { ComponentStory } from '@storybook/react';
import { SubTitle } from './SubTitle';

export default {
  title: 'Atoms/SubTitle',
  component: SubTitle,
  argTypes: {
    textAlign: {
      options: ['left','center','right'],
      control: {
        type: 'select'
      }
    },
    fontWeight: {
      options: ['normal','bold'],
      control: {
        type: 'select'
      }
    },
    fontSize: {
      options: ['sm','md','lg','xl','2xl'],
      control: {
        type: 'select'
      }
    }
  }
}

const Template: ComponentStory<typeof SubTitle> = (args) => {
  return (<SubTitle {...args} />)
}

export const Default = Template.bind({});
Default.args = { 
  children: "Placeholder Text",
  fontColor: "text-black",
  fontSize: "",
  fontWeight: "",
  textAlign: ""
};
