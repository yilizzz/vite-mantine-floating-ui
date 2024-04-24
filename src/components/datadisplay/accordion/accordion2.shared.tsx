export interface AccordionRootProps {
  children: React.ReactNode;
}

export interface AccordionItemProps {
  children: React.ReactNode;
}

export interface AccordionHeaderProps {
  header: string;
  onClick: () => void;
  isOpen?: boolean;
}

export interface AccordionContentProps {
  content: React.ReactNode;
  isOpen: boolean;
}
export interface AccordionItems {
  header: string;
  content: React.ReactNode;
}
