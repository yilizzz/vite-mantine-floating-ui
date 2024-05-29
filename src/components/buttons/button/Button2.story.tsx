import { Meta, StoryFn } from '@storybook/react';
import Button2 from './Button2';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Icon from '@/components/typographies/icon/icon';
import arrowB from '@/assets/arrow-blue.svg';
import arrowW from '@/assets/arrow-white.svg';

export default {
  title: 'Components/Buttons/Button2',
  component: Button2,
} as Meta<typeof Button2>;

const Template: StoryFn<typeof Button2> = (args) => (
  <Button2 {...args}>Accès Plateforme Alliance Procurement</Button2>
);

const TemplateIcon1: StoryFn<typeof Button2> = (args) => (
  <div style={{ backgroundColor: 'black', padding: '20px' }}>
    <Button2 {...args} iconRight={<Icon src={arrowB} />}>
      Envoyer
    </Button2>
  </div>
);

const TemplateLong: StoryFn<typeof Button2> = (args) => (
  <Button2 style={{ width: '100%' }} {...args}>
    Je souhaite m'inscrire
  </Button2>
);

export const Default = Template.bind({});
Default.args = {};

export const Secondary = TemplateIcon1.bind({});
Secondary.args = { variant: 'secondary' };

export const Long = TemplateLong.bind({});
Long.args = {};
