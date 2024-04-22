import { HTMLAttributes, ReactElement } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  items?: {
    title?: string;
    content?: string;
  }[];
};
