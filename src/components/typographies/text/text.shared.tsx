import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  variant:
    | 'number'
    | 'deco'
    | 'title'
    | 'cardTitle'
    | 'paragraphTitle'
    | 'content'
    | 'paragraphHeading'
    | 'info'
    | 'formLabel'
    | 'item'
    | 'fact'
    | 'detail';
  color?: string;
  weight?: string;
  uppercase?: boolean;
  // italic?: boolean;
};
