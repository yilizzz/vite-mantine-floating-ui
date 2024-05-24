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
    color: {
      control: 'select',
      options: ['#222221', '#1F2547', '#42519B', '#8D98CE', '#F1F2F9', '#FFFFFF'],
    },
  },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => (
  <Text {...args}>
    Iaculis dictum eu enim et vitae. Amet risus id ultrices ac. Ultricies aliquam in nibh aliquam
    lobortis risus.{' '}
  </Text>
);

const ParagraphTitle1: StoryFn<typeof Text> = (args) => (
  <div style={{ width: '56vw' }}>
    {' '}
    <Text {...args}>
      Référencement auprès de{' '}
      <span style={{ fontFamily: 'Montserrat-ExtraBold' }}>8 filiales internationales</span> du
      Groupe
    </Text>
  </div>
);
const ParagraphTitle2: StoryFn<typeof Text> = (args) => (
  <Text {...args}>
    Découvrez notre cas <span style={{ fontFamily: 'Montserrat-Bold' }}>Airbus</span>
  </Text>
);
const FormLabel: StoryFn<typeof Text> = (args) => (
  <div style={{ backgroundColor: 'black' }}>
    <Text {...args}>Nom Prénom</Text>
  </div>
);
export const Default = Template.bind({});
Default.args = {};

export const paragraphTitle1 = ParagraphTitle1.bind({});
paragraphTitle1.args = { variant: 'paragraphTitle', italic: true };

export const paragraphTitle2 = ParagraphTitle2.bind({});
paragraphTitle2.args = { variant: 'paragraphTitle', weight: '400' };

export const formLabel = FormLabel.bind({});
formLabel.args = { variant: 'formLabel' };

const TemplateNumber: StoryFn<typeof Text> = (args) => <Text {...args}>13 000</Text>;
export const Number = TemplateNumber.bind({});
Number.args = { variant: 'number' };

const TemplateDeco: StoryFn<typeof Text> = (args) => <Text {...args}>#</Text>;
export const Deco = TemplateDeco.bind({});
Deco.args = { variant: 'deco' };
