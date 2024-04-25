import {
  StAccordionRoot,
  StAccordionItem,
  StAccordionContent,
  StAccordionHeader,
} from './accordion.styled';

import {
  AccordionRootProps,
  AccordionItemProps,
  AccordionHeaderProps,
  AccordionContentProps,
} from './accordion.shared';

import { CirclePlus } from 'lucide-react';
import { CircleMinus } from 'lucide-react';
import React from 'react';

import { useState, createContext, useContext } from 'react';

const AccordionContext = createContext({
  open: false,
  setOpen: () => {},
});

export const useAccordion = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return { open, setOpen: toggleOpen }; // Provide a function to update open state
};

export const AccordionRoot = ({ children }) => {
  return <StAccordionRoot>{children}</StAccordionRoot>;
};

export const AccordionItem = ({ children }) => {
  const { open, setOpen } = useAccordion();

  return (
    <AccordionContext.Provider value={{ open, setOpen }}>
      <StAccordionItem>{children}</StAccordionItem>
    </AccordionContext.Provider>
  );
};

export const AccordionHeader = ({ children }) => {
  const { open, setOpen } = useContext(AccordionContext);

  return (
    <StAccordionHeader onClick={setOpen}>
      {open ? <CircleMinus /> : <CirclePlus />}
      {children}
    </StAccordionHeader>
  );
};

export const AccordionContent = ({ children }) => {
  const { open } = useContext(AccordionContext);

  return (
    <StAccordionContent style={{ display: open ? 'block' : 'none' }}>{children}</StAccordionContent>
  );
};
