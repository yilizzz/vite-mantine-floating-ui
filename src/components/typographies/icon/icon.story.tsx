import { Meta, StoryFn } from '@storybook/react';
import Icon from './icon';
import { theme } from '@/theme';
import plane from '@/assets/plane.svg';
import message from '@/assets/message.svg';
import arrowB from '@/assets/arrow-blue.svg';
import arrowW from '@/assets/arrow-white.svg';
import linkedin from '@/assets/linkedin.svg';
import check from '@/assets/check.svg';
import pin from '@/assets/pin.svg';

export default {
  title: 'Components/typographies/icon',
  component: Icon,
  argTypes: {
    // size: {
    //   control: 'select',
    //   options: [8, 20, 24, 32, 36],
    // },
    src: {
      control: 'select',
      options: [plane, message, arrowB, arrowW, linkedin, check, pin],
    },
  },
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args}></Icon>;
export const Default = Template.bind({});
Default.args = {};
