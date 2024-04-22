import { Meta, StoryFn } from '@storybook/react';
import Breadcrumb from './breadcrumb';

export default {
  title: 'Components/navigation/breadcrumb',
  component: Breadcrumb,
} as Meta<typeof Breadcrumb>;

const Template: StoryFn<typeof Breadcrumb> = (args) => {
  const items = [];
  return <Breadcrumb items={items} {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
