import styled from "styled-components";

//This is for the Nav big container
export const Nav = styled.nav`
  background: white;
  /*margin-top: -80px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

//This is for the NavContainer and everything inside
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1110px;
  margin-right: 40px;
`;

//THis is for the Logo which is linked with the LinkR router package
export const NavLogo = styled.div`
  color: #33323D;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  display: flex;
  margin-left: 24px;
  /* font-weight: bold;
  text-decoration: none; */
`;

export const NavLinks = styled.ul`
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
export const NavL = styled.a`
  color: #33323d;
  text-decoration: none;
  font-family:'Public Sans', sans-serif;
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

export const NavItem = styled.li`
  font-family: sans-serif;
`;
