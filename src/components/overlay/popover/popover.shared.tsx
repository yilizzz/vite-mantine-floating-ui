import { HTMLAttributes, ReactElement } from 'react';
import { Placement } from '@floating-ui/react';
export type Props = HTMLAttributes<HTMLDivElement> & {
  position?: Placement;
  content?: ReactElement;
  open?: boolean;
  setOpen?: (open: boolean) => void;
};
