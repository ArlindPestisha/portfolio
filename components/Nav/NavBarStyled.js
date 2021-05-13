import styled from 'styled-components';

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