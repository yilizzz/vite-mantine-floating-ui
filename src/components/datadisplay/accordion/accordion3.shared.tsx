export interface AccordionRootProps {
  children: React.ReactNode;
}

export interface AccordionItemProps {
  children: React.ReactNode;
}

export interface AccordionHeaderProps {
  iconPosition: 'left' | 'right';
  header: string;
  iconOpened?: React.ReactNode;
  iconClosed?: React.ReactNode;
}

export interface AccordionContentProps {
  content: React.ReactNode;
}
export interface AccordionItemData {
  header: string;
  iconOpened?: React.ReactNode;
  iconClosed?: React.ReactNode;
  content: React.ReactNode;
}
