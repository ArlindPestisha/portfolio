import { StyledButton } from "./ButtonStyled";

const Button = ({ handelClick, text }) => {
  return (
    <div>
      {/* <StyledButton rel="noopener" primary>
        Whatever
      </StyledButton> */}

      <StyledButton primary>
        {text}
      </StyledButton>
      {/* <StyledButton primary /> */}
    </div>
  );
};

export default Button;
