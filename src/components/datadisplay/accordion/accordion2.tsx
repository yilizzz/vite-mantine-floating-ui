import {
  StAccordionRoot,
  StAccordionItem,
  StAccordionContent,
  StAccordionHeader,
} from './accordion2.styled';

import {
  AccordionRootProps,
  AccordionItemProps,
  AccordionHeaderProps,
  AccordionContentProps,
} from './accordion2.shared';

export const AccordionRoot: React.FC<AccordionRootProps> = ({ children }) => {
  return <StAccordionRoot>{children}</StAccordionRoot>;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({ children }) => {
  return <StAccordionItem>{children}</StAccordionItem>;
};

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({ header, onClick, isOpen }) => {
  return (
    <StAccordionHeader onClick={onClick}>
      {header}
      {isOpen ? <span>&#8593;</span> : <span>&#8595;</span>}
    </StAccordionHeader>
  );
};

export const AccordionContent: React.FC<AccordionContentProps> = ({ content, isOpen }) => {
  return (
    <StAccordionContent style={{ display: isOpen ? 'block' : 'none' }}>
      {content}
    </StAccordionContent>
  );
};
