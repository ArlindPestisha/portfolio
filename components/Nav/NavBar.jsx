import Link from "next/link";
import { Logo } from "../../public/logo.js";
import { Nav, NavbarContainer, NavL, NavLinks, NavLogo,NavItem } from "./NavBarStyled";

const NavBar = ({ href, name }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <Link href="/">
            <a href="/">
              <Logo />
            </a>
          </Link>
        </NavLogo>
        <NavLinks>
          <NavItem>
            <Link href="/home" passHref>
              <NavL>HOME</NavL>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/portfolio" passHref>
              <NavL>PORTFOLIO</NavL>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/contact" passHref>
              <NavL>CONTACT ME</NavL>
            </Link>
          </NavItem>
        </NavLinks>
      </NavbarContainer>
    </Nav>
  );
};

export default NavBar;
