import { Meta, StoryFn } from '@storybook/react';
import Accordion from './accordion';

export default {
  title: 'Components/datadisplay/accordion',
  component: Accordion,
} as Meta<typeof Accordion>;

const Template: StoryFn<typeof Accordion> = (args) => {
  const items = [
    {
      title: 'Statement 1',
      content: 'There is only 1 truth.',
    },
    {
      title: 'Statement 2',
      content: 'There are 2 truths.',
    },
    {
      title: 'Statement 3',
      content: 'There are 3 truths, and I am lying.',
    },
  ];
  return <Accordion items={items} {...args} />;
};

const TemplateEmpty: StoryFn<typeof Accordion> = (args) => {
  const items = [];
  return <Accordion items={items} {...args} />;
};
export const Default = Template.bind({});
Default.args = {};

export const NoData = TemplateEmpty.bind({});
NoData.args = {};
