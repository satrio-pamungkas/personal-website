import { ComponentStory } from '@storybook/react';
import { CtaDownload } from './CtaDownload';

export default {
  title: 'Organisms/CtaDownload',
  component: CtaDownload
}

const Template: ComponentStory<typeof CtaDownload> = () => {
  return (<CtaDownload/>)
}

export const Primary = Template.bind({});