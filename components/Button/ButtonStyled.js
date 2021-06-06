import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  /* border-radius: 3px; */
  /* padding: 0.5rem 0;
  margin: 0.5rem 1rem; */
  width: 202px;
  height: 48px;
  background: #203a4c;
  color: white;
  border: none;
  cursor: pointer;
  /* margin-right: 100px; */

  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
      border: 1px solid #33323d;
      box-sizing: border-box;
      width: 168px;
      height: 48px;
      &:hover {
        background: #33323d;
        color: white;
      }
    `}
`;
