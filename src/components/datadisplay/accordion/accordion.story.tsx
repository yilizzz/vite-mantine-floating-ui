import { Meta, StoryFn } from '@storybook/react';
import { useState, ReactElement } from 'react';
import { AccordionRoot, AccordionHeader, AccordionContent, AccordionItem } from './accordion';
import Button from '@/components/buttons/button/Button';

export default {
  title: 'Components/datadisplay/accordion',
  component: AccordionRoot,
} as Meta<typeof AccordionRoot>;

export const SomeComponent: React.FC<ReactElement> = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)}></input>
      <Button onClick={() => alert(value)}>Click</Button>
    </>
  );
};

const Template: StoryFn<typeof AccordionRoot> = (args) => {
  return (
    <AccordionRoot {...args}>
      {['React', 'Solid', 'Vue'].map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader>{item}</AccordionHeader>
          <AccordionContent>
            <SomeComponent key={null} type={''} props={undefined} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};

export const Default = Template.bind({});
Default.args = {};
