import { Meta, StoryFn } from '@storybook/react';
import { useState, ReactElement } from 'react';
import { AccordionItems } from './accordion2.shared';
import { AccordionRoot, AccordionHeader, AccordionContent, AccordionItem } from './accordion2';
import Button from '@/components/buttons/button/Button';

export default {
  title: 'Components/datadisplay/accordion2',
  component: AccordionRoot,
} as Meta<typeof AccordionRoot>;

export const SomeComponent2: React.FC<ReactElement> = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)}></input>
      <Button onClick={() => alert(value)}>Click</Button>
    </>
  );
};

const Template: StoryFn<typeof AccordionRoot> = (args) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  const items: AccordionItems[] = [
    {
      header: 'Statement 1',
      content: <SomeComponent2 key={null} type={''} props={undefined} />,
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
  return (
    <AccordionRoot {...args}>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader
            header={item.header}
            onClick={() => handleItemClick(index)}
            isOpen={index === activeIndex}
          />
          <AccordionContent content={item.content} isOpen={index === activeIndex} />
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};

export const Default = Template.bind({});
Default.args = {};
