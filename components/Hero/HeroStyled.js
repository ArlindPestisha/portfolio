import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  order: 2;
  margin-left: 165px;
  margin-top: 30px;
  @media screen and (max-width: 1600px) {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: auto;
  }
`;

export const ImageWrapper = styled.div`
  display: block;
  width: 1110px;
  height: 600px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 550px) {
    width: 100%;
    height: auto;
  }
`;
