import React from 'react';
import {
  useAccordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
} from './datadisplay/accordion/hook-accordion';

const MyAccordion = ({ list }) => {
  const { open, setOpen } = useAccordion();

  const handleToggle = () => setOpen(!open);

  return (
    <AccordionRoot>
      {list.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={handleToggle}>{item.title}</AccordionHeader>
          <AccordionContent style={{ display: open ? 'block' : 'none' }}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};

export default MyAccordion;
