import { Stack } from '@mantine/core';
import { Props } from './accordion.shared';
import {
  StAccordionItem,
  StAccordionTitle,
  StAccordionContent,
  StAccordionNodata,
} from './accordion.styled';
import { useState } from 'react';

function Accordion({ children, items, ...props }: Props) {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index);
  };
  if (items?.length === 0 || items === undefined) {
    return (
      <Stack gap="xs">
        <StAccordionNodata>No Data</StAccordionNodata>
      </Stack>
    );
  }
  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex;
    return (
      <StAccordionItem key={item.title}>
        <StAccordionTitle
          className={`${isActive ? 'active' : ''}`}
          onClick={() => onTitleClick(index)}
        >
          {item.title}
          {isActive ? <span>&#8593;</span> : <span>&#8595;</span>}
        </StAccordionTitle>
        {isActive ? <StAccordionContent>{item.content}</StAccordionContent> : <></>}
      </StAccordionItem>
    );
  });

  return <Stack gap="xs">{renderedItems}</Stack>;
}

export default Accordion;
