import { Meta, StoryFn } from '@storybook/react';
import { useState, ReactElement } from 'react';
import { AccordionItemData } from './accordion3.shared';
import { AccordionRoot, AccordionHeader, AccordionContent, AccordionItem } from './accordion3';
import Button from '@/components/buttons/button/Button';
import { CircleArrowDown } from 'lucide-react';
import { CircleArrowUp } from 'lucide-react';
import { ArrowDownToDot } from 'lucide-react';
import { ArrowUpFromDot } from 'lucide-react';

export default {
  title: 'Components/datadisplay/accordion3',
  component: AccordionRoot,
} as Meta<typeof AccordionRoot>;

export const SomeComponent3: React.FC<ReactElement> = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)}></input>
      <Button onClick={() => alert(value)}>Click</Button>
    </>
  );
};

const Template: StoryFn<typeof AccordionRoot> = (args) => {
  const items: AccordionItemData[] = [
    {
      header: 'Statement 1',
      content: <SomeComponent3 key={null} type={''} props={undefined} />,
    },
    {
      header: 'Statement 2',
      iconOpened: <CircleArrowUp />,
      iconClosed: <CircleArrowDown />,
      content: <Button onClick={() => alert('Statement 2 clicked')}>Click</Button>,
    },
    {
      header: 'Statement 3',
      iconOpened: <ArrowUpFromDot />,
      iconClosed: <ArrowDownToDot />,
      content: <a href="https://namkin.fr/fr/">Namkin</a>,
    },
  ];
  return (
    <AccordionRoot {...args}>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader
            iconPosition="right"
            header={item.header}
            iconClosed={item.iconClosed}
            iconOpened={item.iconOpened}
          />
          <AccordionContent content={item.content} />
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};

export const Default = Template.bind({});
Default.args = {};
