import {
  StAccordionRoot,
  StAccordionItem,
  StAccordionContent,
  StAccordionHeader,
} from './accordion.styled';
import { AccordionProps } from './accordion.shared';
import { useState } from 'react';

export const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <StAccordionRoot>
      {items.map((item, index: number) => (
        <StAccordionItem key={index}>
          <StAccordionHeader
            onClick={() => handleItemClick(index)}
            className={`${index === activeIndex ? 'active' : ''}`}
          >
            {item.header}
            {index === activeIndex ? <span>&#8593;</span> : <span>&#8595;</span>}
          </StAccordionHeader>
          <StAccordionContent className={`${index === activeIndex ? 'active' : ''}`}>
            {item.content}
          </StAccordionContent>
        </StAccordionItem>
      ))}
    </StAccordionRoot>
  );
};
