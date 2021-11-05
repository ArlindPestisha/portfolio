import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: auto;
  height: auto;
  /* margin-left: 160px; */
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    max-height: auto;
    max-width: auto;
   
  }
  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
    max-height: auto;
    max-width: auto;
    margin-left: 50px;
  }
  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    max-height: auto;
    max-width: auto;
    
  }
  @media screen and (max-width: 580px) {
    display: flex;
    flex-direction: column;
    max-height: auto;
    max-width: auto;
    margin-left: 20px;
  }
  @media screen and (max-width: 380px) {
    display: flex;
    flex-direction: column;
    max-height: auto;
    max-width: auto;
    margin-left: 20px;
  }
`;

export const Line = styled.div`
  width: 1110px;
  border-bottom: 2px solid #979797;
  height: 0px;
  border-top-width: 0px;
  margin-top: 88px;
  @media screen and (max-width: 1024px) {
    margin-right: 20px;
    margin-top: 40px;
    width: auto;
  }
  @media screen and (max-width: 980px) {
    margin-right: 20px;
    margin-top: 40px;
    width: auto;
  }
  @media screen and (max-width: 780px) {
    margin-right: 20px;
    margin-top: 40px;
    width: auto;
  }
  @media screen and (max-width: 580px) {
    margin-right: 20px;
    margin-top: 40px;
    width: auto;
  }
  @media screen and (max-width: 380px) {
    margin-right: 20px;
    margin-top: 40px;
    width: auto;
  }
`;

export const H1 = styled.div`
  width: 350px;
  height: 42px;
  font-family: "Public Sans", sans-serif;
  @media screen and (max-width: 380px) {
    padding-bottom: 20px;
  }
`;
export const TextWrapperP = styled.p`
  width: 635px;
  height: 210px;
  font-family: "Public Sans", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: left;
  color: #33323d;
  /* @media screen and (max-width: 380px) {
    width: auto;
  } */
  @media screen and (max-width: 980px) {
    width: auto;
  }
  @media screen and (max-width: 780px) {
    width: auto;
  }
  @media screen and (max-width: 580px) {
    width: auto;
  }
  @media screen and (max-width: 380px) {
    width: 250px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  padding-top: 50px;
  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
    padding-right: 100px;
  }
  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    padding-right: 100px;
  }
  @media screen and (max-width: 580px) {
    display: flex;
    flex-direction: column;
    padding-right: 100px;
  }
  @media screen and (max-width: 380px) {
    display: flex;
    flex-direction: column;
    padding-right: 100px;
  }
`;

export const SocialW = styled.div`
  width: 500px;
  margin-top: auto;
  justify-content: center;
  display: flex;
  align-self: baseline;
  /* padding-right: 140px; */
  @media screen and (max-width: 980px) {
    width: auto;
    margin-top: 50px;
  }
  @media screen and (max-width: 780px) {
    width: auto;
    margin-top: 50px;
  }
  @media screen and (max-width: 580px) {
    width: auto;
    margin-top: 100px;
  }
  @media screen and (max-width: 480px) {
    width: auto;
    margin-top: 200px;
  }

  @media screen and (max-width: 380px) {
    width: auto;
    margin-top: 300px;
  }
`;

export const LinkInWrapper = styled.div`
  padding-left: 25px;
`;
