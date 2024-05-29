import { Props } from './text.shared';
import { StDiv } from './text.styled';

function Text({
  children,
  variant,
  color,
  weight,
  size,
  uppercase = false,
  italic = false,
  ...props
}: Props) {
  return (
    <StDiv
      variant={variant}
      color={color}
      weight={weight}
      uppercase={uppercase}
      size={size}
      italic={italic}
      {...props}
    >
      <span>{children}</span>
    </StDiv>
  );
}

export default Text;
