import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
  margin: 40px;
  @media screen and (max-width: 1600px) {
    display: flex;
    justify-content: start;
    width: auto;
  }
  @media screen and (max-width: 1300px) {
    display: flex;
    justify-content: start;
    width: auto;
  }
  @media screen and (max-width: 980px) {
    display: flex;
    justify-content: start;
    width: auto;
  }
  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 580px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 380px) {
    display: flex;
    flex-direction: column;
  }
`;

export const WrapperImg = styled.div`
  width: auto;
  height: auto;
  /* width: 1110px;
  height: 500px; */
  margin: auto;
  margin-top: 30px;
  @media screen and (max-width: 1300px) {
    max-width: fit-content;
    margin: auto;
    height: auto;
  }
  @media screen and (max-width: 980px) {
    max-width: fit-content;
    margin: auto;
    height: auto;
  }
  @media screen and (max-width: 780px) {
    max-width: fit-content;
    margin-left: 0;
    height: auto;
  }
  @media screen and (max-width: 580px) {
    max-width: fit-content;
    margin-left: 0px;
    height: auto;
  }
  @media screen and (max-width: 380px) {
    max-width: fit-content;
    margin-left: 0px;
    height: auto;
  }
`;

export const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  margin: auto;
  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: row;
    height: auto;
    align-items: flex-start;
    margin: auto;
  }
  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: row;
    height: auto;
    align-items: flex-start;
    margin-left: auto;
  }
  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    height: auto;
    margin-left: 0px;
  }
  @media screen and (max-width: 580px) {
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: flex-start;
    margin-left: 0px;
  }
  @media screen and (max-width: 380px) {
  }
`;

export const TextWrapper = styled.div`
  width: 350px;
  height: auto;
  /* border-top: 2px solid #979797;
  border-bottom: 2px solid #979797; */
  margin-right: 100px;
  /* margin-bottom: 370px; */
  @media screen and (max-width: 1200px) {
    margin-bottom: 30px;
    width: auto;
    height: auto;
  }
  @media screen and (max-width: 980px) {
    margin-bottom: 30px;
    width: auto;
    height: auto;
  }
  @media screen and (max-width: 780px) {
    margin-bottom: 0;
    width: auto;
    height: auto;
    margin-right: 0px;
  }
  @media screen and (max-width: 580px) {
    margin-top: 30px;
    margin-bottom: 0px;
    width: auto;
    margin-right: 0px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 0px;
    width: auto;
    margin-left: 0px;
    height: auto;
    margin-right: 0px;
  }
  @media screen and (max-width: 380px) {
    margin-bottom: 0px;
    margin-top: 30px;
    width: auto;
    height: auto;
    margin-right: 0px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 80px;
  @media screen and (max-width: 780px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 580px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 380px) {
    margin-top: 30px;
  }
`;

export const TextWrapper2 = styled.div`
  width: 635px;
  height: auto;
  /* margin-bottom: 240px; */
  ${
    "" /* border-top: 2px solid #979797;
  border-bottom: 2px solid #979797; */
  }
  margin-left: 50px;
  /* margin-bottom: 800px; */
  @media screen and (max-width: 1200px) {
    width: auto;
    height: none;
  }
  @media screen and (max-width: 980px) {
    margin-bottom: 50px;
    margin-left: 0;
    width: auto;
    height: none;
  }
  @media screen and (max-width: 780px) {
    margin-bottom: 30px;
    margin-left: 0;
    width: auto;
    height: none;
  }
  @media screen and (max-width: 580px) {
    margin-bottom: 30px;
    width: auto;
    margin-left: 0px;
    height: auto;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 30px;
    width: auto;
    margin-left: 0px;
    height: auto;
  }
  @media screen and (max-width: 380px) {
    margin-bottom: 40px;
    width: auto;
    margin-left: 0px;
  }
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
  @media screen and (max-width: 1600px) {
    max-width: -moz-available;
    max-width: -webkit-fill-available;
    margin: auto;
    margin-top: 100px;
  }

  @media screen and (max-width: 1300px) {
    max-width: -moz-available;
    max-width: -webkit-fill-available;
    margin: auto;
    margin-top: 50px;
  }
  @media screen and (max-width: 980px) {
    max-width: -moz-available;
    max-width: -webkit-fill-available;
    margin-left: 0px;
    margin-top: 0px;
  }
  @media screen and (max-width: 780px) {
    max-width: -moz-available;
    max-width: -webkit-fill-available;
    margin-left: 0px;
    margin-top: 0px;
  }
  @media screen and (max-width: 580px) {
    max-width: -moz-available;
    max-width: -webkit-fill-available;
    margin-left: 0px;
    margin-top: 0px;
  }
  @media screen and (max-width: 380px) {
    max-width: auto;
    margin-left: 0px;
    margin-top: 0px;
  }
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
  /* width: 138px;
  height: 66px;
  line-height: 9px;
  @media screen and (max-width: 560px) {
    width: auto;
    height: auto;
    line-height: 0px; */
`;

export const TextColor = styled.div`
  font-family: "Public Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 30px;
  color: #5fb4a2;
`;
export const Anchor = styled.a`
  color: #33323d;
  text-decoration: none;
  font-family: "Public Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;

  &:hover {
    color: #5fb4a2;
  }
`;
