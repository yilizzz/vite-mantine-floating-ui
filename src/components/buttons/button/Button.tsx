import { Group } from '@mantine/core';
import { StButton } from './Button.styled';
import { Props } from './Button.shared';

function Button({
  children,
  variant = 'primary',
  size = 'medium',
  disabled,
  iconLeft,
  iconRight,
  squared = false,
  ...props
}: Props) {
  return (
    <StButton
      variant={variant}
      size={size}
      iconLeft={iconLeft}
      iconRight={iconRight}
      disabled={disabled}
      squared={squared}
      {...props}
    >
      <Group justify="space-between" gap={10}>
        {iconLeft ? iconLeft : <></>}
        {children}
        {iconRight ? iconRight : <></>}
      </Group>
    </StButton>
  );
}

export default Button;
