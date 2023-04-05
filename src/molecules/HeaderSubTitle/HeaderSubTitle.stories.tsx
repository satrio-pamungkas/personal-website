import { ComponentStory } from '@storybook/react';
import { HeaderSubTitle } from './HeaderSubTitle';

export default {
  title: 'Molecules/HeaderSubTitle',
  component: HeaderSubTitle
}

const Template: ComponentStory<typeof HeaderSubTitle> = () => {
  return (<HeaderSubTitle/>)
}

export const Primary = Template.bind({});