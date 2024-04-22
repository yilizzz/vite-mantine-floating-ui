import { StPopoverContent } from './popover.styled';
import * as React from 'react';
import { Props } from './popover.shared';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  FloatingFocusManager,
  useId,
} from '@floating-ui/react';

function Popover({ children, content, position = 'top', open, setOpen, ...props }: Props) {
  const { refs, floatingStyles, context } = useFloating({
    placement: position,
    open,
    onOpenChange: setOpen,
    middleware: [offset(10), flip({ fallbackAxisSideDirection: 'end' }), shift()],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

  const headingId = useId();

  return (
    <>
      {children &&
        React.cloneElement(children, {
          ref: refs.setReference,
          ...getReferenceProps(),
        })}
      {open && (
        <FloatingFocusManager context={context} modal={false}>
          <StPopoverContent
            ref={refs.setFloating}
            style={floatingStyles}
            aria-labelledby={headingId}
            {...getFloatingProps()}
          >
            {content}
          </StPopoverContent>
        </FloatingFocusManager>
      )}
    </>
  );
}

export default Popover;
