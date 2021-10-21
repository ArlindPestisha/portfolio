import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin-top: 150px;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled.div`
  width: 540px;
  height: 660px;
  @media screen and (max-width: 960px) {
    width: 400px;
  }
`;

export const TextWrapper = styled.div`
  width: 350px;
  height: 650px;
  border-top: 2px solid #979797;
  border-bottom: 2px solid #979797;
  padding-top: 20px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 80px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 1200px;
  justify-content: space-between;
  padding-top: 20px;
  margin-top: 100px;
  margin-bottom: 50px;
  @media screen and (max-width: 960px) {
    width: auto;
  }
  @media screen and (max-width: 560px) {
    margin-top: 40px;
    margin-bottom: 0px;
  }
  @media screen and (max-width: 360px) {
    margin-top: 40px;
    margin-bottom: 0px;
  }
`;

export const SectionTwoText = styled.div`
  width: 385px;
  height: 84px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 42px;
  /* or 105% */
  letter-spacing: -0.357143px;
  color: #33323d;
`;
export const Line = styled.div`
  width: 534px;
  border-bottom: 2px solid #979797;
  height: 0px;
  border-top-width: 0px;
  margin-top: 88px;
  margin-left: 40px;
  @media screen and (max-width: 960px) {
    width: 200px;
  }
  @media screen and (max-width: 560px) {
    display: none;
  }
  @media screen and (max-width: 360px) {
    display: none;
  }
`;

export const SectionTwoBtnWrapper = styled.div`
  padding-left: 30px;
  margin-top: 60px;
  margin-left: 25px;
`;

export const AnchorWrapper = styled.a`
  color: #33323d;
  text-decoration: none;
  font-family: "Public Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
