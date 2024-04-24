export interface AccordionItem {
  header: React.ReactNode;
  content: React.ReactNode;
}
export interface AccordionProps {
  items: AccordionItem[];
}
