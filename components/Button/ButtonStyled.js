import styled, {css} from "styled-components";

export const StyledButton = styled.button`
  
  display: inline-block;
  /* border-radius: 3px; */
  /* padding: 0.5rem 0;
  margin: 0.5rem 1rem; */
  width: 200px;
  height: 48px;
  background: #203A4C;
  color: white;
  border: none;
  cursor: pointer;
  /* margin-right: 100px; */

  
  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
    `}
`;
