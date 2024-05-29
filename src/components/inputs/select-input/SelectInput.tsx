import { StSelect } from './SelectInput.styled';
import { Props } from './SelectInput.shared';
function SelectInput({ children, variant, options, value, ...props }: Props) {
  return (
    <StSelect value={value} {...props}>
      {options?.map((option) => {
        return (
          <option value={option} key={option}>
            {option}
          </option>
        );
      })}
    </StSelect>
  );
}

export default SelectInput;
