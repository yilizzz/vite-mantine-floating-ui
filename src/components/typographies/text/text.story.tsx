import { Meta, StoryFn } from '@storybook/react';
import Text from './text';
import { Beer } from 'lucide-react';
import { theme } from '@/theme';

export default {
  title: 'Components/typographies/Text',
  component: Text,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'number',
        'deco',
        'title',
        'cardTitle',
        'paragraphTitle',
        'content',
        'paragraphHeading',
        'info',
        'formLabel',
        'item',
        'fact',
        'detail',
      ],
    },
  },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => <Text {...args}>Achat de Biens </Text>;

const TemplateItalic: StoryFn<typeof Text> = (args) => (
  <div style={{ width: '56vw' }}>
    {' '}
    <Text {...args}>
      <i>
        Référencement auprès de{' '}
        <span style={{ fontFamily: 'Montserrat-Bold' }}>8 filiales internationales</span> du Groupe
      </i>
    </Text>
  </div>
);
export const Default = Template.bind({});
Default.args = {};
export const Italic = TemplateItalic.bind({});
Italic.args = { variant: 'paragraphTitle' };

const TemplateNumber: StoryFn<typeof Text> = (args) => <Text {...args}>13 000</Text>;
export const Number = TemplateNumber.bind({});
Number.args = { variant: 'number' };

const TemplateDeco: StoryFn<typeof Text> = (args) => <Text {...args}>#</Text>;
export const Deco = TemplateDeco.bind({});
Deco.args = { variant: 'deco' };
