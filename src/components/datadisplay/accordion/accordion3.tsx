import {
  StAccordionRoot,
  StAccordionItem,
  StAccordionContent,
  StAccordionHeader,
} from './accordion3.styled';

import {
  AccordionRootProps,
  AccordionItemProps,
  AccordionHeaderProps,
  AccordionContentProps,
} from './accordion3.shared';

import { CirclePlus } from 'lucide-react';
import { CircleMinus } from 'lucide-react';
import { useContext, useState } from 'react';
import React from 'react';

const AccordionContext = React.createContext({
  open: false,
  setOpen: (open: any) => {},
});

export const AccordionRoot: React.FC<AccordionRootProps> = ({ children }) => {
  return <StAccordionRoot>{children}</StAccordionRoot>;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <AccordionContext.Provider value={{ open, setOpen }}>
      <StAccordionItem>{children}</StAccordionItem>
    </AccordionContext.Provider>
  );
};

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  header,
  iconPosition = 'left',
  iconClosed = <CirclePlus />,
  iconOpened = <CircleMinus />,
}) => {
  const { open, setOpen } = useContext(AccordionContext);
  return (
    <StAccordionHeader onClick={() => setOpen(!open)}>
      {open ? (
        iconPosition === 'left' ? (
          <>
            {iconOpened} {header}
          </>
        ) : (
          <>
            {header} {iconOpened}
          </>
        )
      ) : iconPosition === 'left' ? (
        <>
          {iconClosed}
          {header}
        </>
      ) : (
        <>
          {header}
          {iconClosed}
        </>
      )}
    </StAccordionHeader>
  );
};

export const AccordionContent: React.FC<AccordionContentProps> = ({ content }) => {
  const { open, setOpen } = useContext(AccordionContext);
  return (
    <StAccordionContent style={{ display: open ? 'block' : 'none' }}>{content}</StAccordionContent>
  );
};
