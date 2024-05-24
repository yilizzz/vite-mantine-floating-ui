import { Meta, StoryFn } from '@storybook/react';
import Icon2 from './icon2';
import { Beer } from 'lucide-react';
import { theme } from '@/theme';

export default {
  title: 'Components/typographies/Icon2',
  component: Icon2,
} as Meta<typeof Icon2>;

const Template: StoryFn<typeof Icon2> = (args) => (
  <Icon2 {...args}>
    <Beer />
  </Icon2>
);
export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = { size: 15, color: theme.colors.redColor[5] };

export const MediumBG = Template.bind({});
MediumBG.args = {
  size: 24,
  color: theme.colors.redColor[9],
  bg: theme.colors.greenColor[2],
};
export const Badge = Template.bind({});
Badge.args = {
  size: 30,
  color: theme.colors.greenColor[2],
  bg: theme.colors.redColor[8],
  badge: true,
};

export const Large = Template.bind({});
Large.args = { size: 36, color: theme.colors.grayColor[5] };

export const XLarge = Template.bind({});
XLarge.args = { size: 48, color: theme.colors.greenColor[9] };
