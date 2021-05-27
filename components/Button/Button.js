import { StyledButton } from "./ButtonStyled";

const Button = () => {
  return (
    <div>
      <StyledButton rel="noopener" primary>
        Whatever
      </StyledButton>

      <StyledButton>Normal</StyledButton>
    </div>
  );
};

export default Button;
