import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const WrapperImg = styled.div`
  width: 1110px;
  height: 500px;
  margin-left: 170px;
  margin-top: 30px;
`;

export const Wrapper = styled.div`
  width: 1110px;
  height: 1192px;
  display: flex;
  align-items: center;
  margin-left: 170px;
`;

export const TextWrapper = styled.div`
  width: 350px;
  height: 600px;
  border-top: 2px solid #979797;
  border-bottom: 2px solid #979797;
  margin-right: 100px;
  margin-bottom: 370px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 80px;
`;

export const TextWrapper2 = styled.div`
  width: 635px;
  height: 250px;
  ${
    "" /* border-top: 2px solid #979797;
  border-bottom: 2px solid #979797; */
  }
  margin-left: 50px;
  margin-bottom: 800px;
`;

// export const ImageWrapper2 = styled.div`
//   padding-bottom: 30px;
// `;

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
  align-items: center;
  justify-content: start;

  cursor: pointer;
`;

export const ImageWrapperRight = styled.div`
  margin-right: 20px;
`;
export const ImageWrapperLeft = styled.div`
  margin-left: 20px;
`;

export const TextWrapperPagination = styled.div`
  font-family: sans-serif;
  width: 138px;
  height: 66px;
  line-height: 9px;
`;
