import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 1200px;
  justify-content: space-between;
  padding-top: 20px;
  /* margin-top: 100px;
  margin-bottom: 50px;
  margin-left: 120px; */
  margin: auto;
  @media screen and (max-width: 1300px) {
    display: flex;
    max-width: -moz-available;
    max-width: -webkit-fill-available;
    align-items: center;
    margin: 40px;
  }
  @media screen and (max-width: 960px) {
    display: flex;
    max-width: -moz-available;
    max-width: -webkit-fill-available;
    align-items: center;
    margin: 40px;
  }
  @media screen and (max-width: 780px) {
    display: flex;
    max-width: -moz-available;
    max-width: -webkit-fill-available;
    align-items: center;
    margin-left: 0;
  }
  @media screen and (max-width: 680px) {
    display: flex;
    max-width: -moz-available;
    max-width: -webkit-fill-available;
    align-items: center;
    margin-left: 0;
  }
  @media screen and (max-width: 560px) {
    max-width: -moz-available;
    max-width: -webkit-fill-available;
    margin-top: 40px;
    margin-bottom: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }
  @media screen and (max-width: 360px) {
    margin-top: 40px;
    margin-bottom: 0px;
    display: flex;
    flex-direction: column;
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
  @media screen and (max-width: 780px) {
    width: auto;
    margin-left: 30px;
  }
  @media screen and (max-width: 680px) {
    width: auto;
    margin-left: 30px;
  }

  @media screen and (max-width: 560px) {
    width: 200px;
  }
  @media screen and (max-width: 360px) {
    font-size: 20px;
    /* width: 14ch; */
    width: 200px;
  }
`;
export const Line = styled.div`
  width: 534px;
  border-bottom: 2px solid #979797;
  height: 0px;
  border-top-width: 0px;
  margin-top: 88px;
  margin-left: 40px;
  @media screen and (max-width: 1300px) {
    width: 250px;
  }
  @media screen and (max-width: 960px) {
    width: 200px;
  }
  @media screen and (max-width: 680px) {
    width: 100px;
    margin-left: 20px;
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
  @media screen and (max-width: 960px) {
    margin-right: 20px;
  }
  @media screen and (max-width: 780px) {
    margin-right: 20px;
    margin-top: 85px;
  }

  @media screen and (max-width: 680px) {
    margin-right: 20px;
    margin-top: 85px;
  }
  @media screen and (max-width: 560px) {
    margin-top: 200px;
    display: flex;
    align-items: center;
    margin-left: 0px;
    padding-left: 0px;
  }

  @media screen and (max-width: 380px) {
    margin-top: 200px;
  }
`;
