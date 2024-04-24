import { Meta, StoryFn } from '@storybook/react';
import { Accordion } from './accordion';
import { AccordionItem } from './accordion.shared';
import Button from '@/components/buttons/button/Button';
import { ReactElement, useState } from 'react';
import { CircleArrowDown } from 'lucide-react';
import { CircleArrowUp } from 'lucide-react';

export default {
  title: 'Components/datadisplay/accordion',
  component: Accordion,
} as Meta<typeof Accordion>;

export const SomeComponent: React.FC<ReactElement> = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)}></input>
      <Button onClick={() => alert(value)}>Click</Button>
    </>
  );
};

const Template: StoryFn<typeof Accordion> = (args) => {
  const items: AccordionItem[] = [
    {
      header: (
        <>
          <p>Statement 1</p>
          <CircleArrowDown></CircleArrowDown>
        </>
      ),
      content: <SomeComponent key={null} type={''} props={undefined} />,
    },
    {
      header: 'Statement 2',
      content: <Button onClick={() => alert('Statement 2 clicked')}>Click</Button>,
    },
    {
      header: 'Statement 3',
      content: <a href="https://namkin.fr/fr/">Namkin</a>,
    },
  ];
  return <Accordion items={items}></Accordion>;
};

export const Default = Template.bind({});
Default.args = {};
