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
  transition: ease-in 0.3s;
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

  ${(props) =>
    props.secondary &&
    css`
      width: 555px;
      height: 132px;
      text-align: right;
      border: none;
      background-color: white;
      border-bottom: 1px solid #979797;
      border-top: 1px solid #979797;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      align-content: space-between;
    `}
    ${(props) =>
    props.third &&
    css`
      width: 555px;
      height: 132px;
      text-align: left;
      border: none;
      background-color: white;
      border-right: 1px solid #979797;
      border-bottom: 1px solid #979797;
      border-top: 1px solid #979797;
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
    `}
`;
