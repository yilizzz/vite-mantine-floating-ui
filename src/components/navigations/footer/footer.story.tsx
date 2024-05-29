import { Meta, StoryFn } from '@storybook/react';
import Footer from './footer';
import { theme } from '@/theme';

export default {
  title: 'Components/navigation/Footer',
  component: Footer,
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = (args) => <Footer {...args}></Footer>;
export const Default = Template.bind({});
Default.args = {};
