import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args}>query</Button>;
const TemplateIconRight: StoryFn<typeof Button> = (args) => (
  <Button {...args} iconRight={<ChevronRight />}>
    Click
  </Button>
);

const TemplateIconLeft: StoryFn<typeof Button> = (args) => (
  <Button {...args} iconLeft={<ChevronLeft />}></Button>
);

const TemplateDisabled: StoryFn<typeof Button> = (args) => (
  <Button {...args}>Need some time...</Button>
);

export const Primary = Template.bind({});
Primary.args = { variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'secondary',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'secondary',
  size: 'large',
};

export const destructive = Template.bind({});
destructive.args = {
  variant: 'destructive',
};

export const outline = Template.bind({});
outline.args = {
  variant: 'outline',
};

export const ghost = Template.bind({});
ghost.args = {
  variant: 'ghost',
};

export const link = Template.bind({});
link.args = {
  variant: 'link',
};

export const iconLeft = TemplateIconLeft.bind({});
iconLeft.args = {
  variant: 'primary',
  squared: true,
};

export const iconRight = TemplateIconRight.bind({});
iconRight.args = {
  variant: 'primary',
};

export const loading = TemplateDisabled.bind({});
loading.args = {
  disabled: true,
};
