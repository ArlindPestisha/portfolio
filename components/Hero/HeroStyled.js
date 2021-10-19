import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  order: 2;
  margin-left: 165px;
  margin-top: 30px;
  @media screen and (max-width: 1600px) {
    max-width: auto;
  }

  @media screen and (max-width: 1200px) {
    max-width: auto;
  }
  @media screen and (max-width: 960px) {
    max-width: auto;
    margin-left: 80px;
  }
  @media screen and (max-width: 560px) {
    max-width: auto;
    margin: 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 1110px;
  height: 600px;
  display: flex;
  justify-content: center;
  /* @media screen and (max-width: 1600px) {
    width: 1110px;
    height: 600px;
  }

  @media screen and (max-width: 1200px) {
    width: 1000px;
    height: 550px;
    margin-right: 500px;
  }*/
  @media screen and (max-width: 960px) {
    /* height: 300px; */
    /* width: max-content; */
    margin-top: 40px;
    /* width: 100%; */
    /* max-height: 100;
    max-width: 100%; */
    overflow: hidden;
    width: 700px;
    height: 500px;
  }

  @media screen and (max-width: 560px) {
    height: 300px;
    /* width: max-content; */
    margin-top: 40px;
    /* width: 100%; */
    max-height: 100;
    max-width: 100%;
    overflow: hidden;
  }
`;
