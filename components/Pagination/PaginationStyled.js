import styled from "styled-components";

export const WrapperPagination = styled.div`
  width: 1110px;
  height: 132px;
  margin-left: 170px;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
`;

export const ButtonLeft = styled.button`
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
`;

export const ButtonRight = styled.button`
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
  ${'' /* align-items: center; */}
  justify-content: flex-end;

  cursor: pointer;
`;

export const ImageWrapperRight = styled.div`
  margin-right: 20px;
`;
export const ImageWrapperLeft = styled.div`
  margin-left: 20px;
`;

export const TextWrapper = styled.div`
  font-family: sans-serif;
  width: 138px;
  height: 66px;
  line-height: 9px;
`;
