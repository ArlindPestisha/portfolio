import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* flex-direction: row; */
  margin-top: 150px;
  flex-wrap: wrap;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  /* @media screen and (max-width: 960px) {
    margin-top: 80px;
  } */
  @media screen and (max-width: 760px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 560px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 360px) {
    margin-top: 0px;
  }
`;

export const ImageWrapper = styled.div`
  width: 540px;
  height: 500px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const TextWrapper = styled.div`
  width: 350px;
  height: 465px;
  border-top: 2px solid #979797;
  border-bottom: 2px solid #979797;
  padding-top: 30px;
  /* @media screen and (max-width: 960px) {
    margin-top: 80px;
  } */
  @media screen and (max-width: 860px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 760px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 560px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 360px) {
    margin-top: 0px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 80px;
  @media screen and (max-width: 560px) {
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 360px) {
    display: flex;
    justify-content: center;
  }
`;
// export const SectionWrapper = styled.div`
//   display: flex;
//   /* justify-content: space-between; */
//   width: 1200px;
//   justify-content: space-between;
//   padding-top: 20px;
//   margin-top: 100px;
//   margin-bottom: 50px;
// `;

// export const SectionTwoText = styled.div`
//   width: 385px;
//   height: 84px;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 16px;
//   line-height: 42px;
//   /* or 105% */
//   letter-spacing: -0.357143px;
//   color: #33323d;
// `;
// export const Line = styled.div`
//   width: 534px;
//   border-bottom: 2px solid #979797;
//   height: 0px;
//   border-top-width: 0px;
//   margin-top: 88px;
//   margin-left: 40px;
// `;

// export const SectionTwoBtnWrapper = styled.div`
//   padding-left: 30px;
//   margin-top: 60px;
//   margin-left: 25px;
// `;
