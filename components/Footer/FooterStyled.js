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
`;
export const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  
`;
export const FooterLogo = styled.div`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  /* font-size: 1.5rem;
  align-items: center;
  display: flex;
  margin-left: 24px; */
  /* font-weight: bold;
  text-decoration: none; */
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
    display: none;
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
`;

// export const NavItem = styled.li`
//   font-family: sans-serif;
// `;
