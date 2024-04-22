import { HTMLAttributes, ReactElement } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  variable?: 'allLinks' | 'link-menu';
  items?: {
    link?: string;
    label?: string;
  }[];
};
