import { ComponentStory } from '@storybook/react';
import { ButtonIcon } from './ButtonIcon';
import { BsFill0CircleFill } from "react-icons/bs";

export default {
  title: 'Atoms/ButtonIcon',
  component: ButtonIcon
}

const Template: ComponentStory<typeof ButtonIcon> = (args) => {
  return (<ButtonIcon {...args} />)
}

export const Primary = Template.bind({});
Primary.args = {
  icon: <BsFill0CircleFill color='white' />
}