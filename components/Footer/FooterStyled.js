import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 200px;
  width: 100%;
  height: 80px;
  background-color: #33323d;
  left: 0px;
  right: 0px;
  @media screen and (max-width: 960px) {
  }
  @media screen and (max-width: 560px) {
    display: flex;
    flex-direction: column;
    height: 300px;
  }
  @media screen and (max-width: 360px) {
    display: flex;
    flex-direction: column;
    height: 300px;
  }
`;
export const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 400px;
  @media screen and (max-width: 960px) {
    margin-right: 0;
  }
  @media screen and (max-width: 560px) {
    margin-right: 0;
    display: flex;
    flex-direction: column;
    align-self: center;
  }
  @media screen and (max-width: 360px) {
    margin-right: 0;
    display: flex;
    flex-direction: column;
    align-self: center;
  }
`;
export const FooterLogo = styled.div`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  margin-top: 22px;
  /* font-size: 1.5rem;
  align-items: center;
  display: flex;
  margin-left: 24px; */
  /* font-weight: bold;
  text-decoration: none; */
  @media screen and (max-width: 960px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 560px) {
    margin-left: 150px;
  }
  @media screen and (max-width: 360px) {
    margin-left: 140px;
  }
`;
export const FooterList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  width: 400px;

  @media screen and (max-width: 768px) {
    width: 400px;
  }
  @media screen and (max-width: 560px) {
    width: 300px;
    margin-top: 35px;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 360px) {
    /* width: 300px; */
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    width: 250px;
  }
`;
export const FooterLinks = styled.a`
  color: white;
  cursor: pointer;
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
  /* @media screen and (max-width: 960px) {
  }
  @media screen and (max-width: 560px) {
    margin-top: 35px;
    width: 300px
  }
  @media screen and (max-width: 360px) {
    margin-top: 35px;
  } */
`;

// export const NavItem = styled.li`
//   font-family: sans-serif;
// `;

export const RightSide = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 27px;
  @media screen and (max-width: 960px) {
    margin-right: 80px;
  }
  @media screen and (max-width: 560px) {
    margin-right: 0;
  }
  @media screen and (max-width: 360px) {
    margin-right: 0;
  }
`;
export const Github = styled.div`
  margin-right: 25px;
`;

export const SecondLink = styled.div`
  margin: 20px;
`;
