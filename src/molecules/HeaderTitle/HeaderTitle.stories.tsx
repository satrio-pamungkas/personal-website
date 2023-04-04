import { ComponentStory } from '@storybook/react';
import { HeaderTitle } from './HeaderTitle';

export default {
  title: 'Molecules/HeaderTitle',
  component: HeaderTitle
}

const Template: ComponentStory<typeof HeaderTitle> = () => {
  return (<HeaderTitle/>)
}

export const Primary = Template.bind({});