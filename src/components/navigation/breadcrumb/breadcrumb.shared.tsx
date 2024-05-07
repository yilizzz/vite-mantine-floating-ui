import { HTMLAttributes, ReactElement } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  variant?: 'allLinks' | 'link-menu';
  items?: {
    active?: boolean;
    link?: string;
    label?: string;
  }[];
};
