import { StyledButton } from "./ButtonStyled";

const Button = ({ handelClick, text }) => {
  return (
    <div>
      {/* <StyledButton rel="noopener" primary>
        Whatever
      </StyledButton> */}

      <StyledButton onClick={handelClick}>{text}</StyledButton>
      
    </div>
  );
};

export default Button;
