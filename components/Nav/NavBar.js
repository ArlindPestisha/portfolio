import Link from "next/link";
import { Logo } from "../../public/logo.js";
import { Hamburger } from "../../public/hamburger";
import { Close } from "../../public/close";
import { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavL,
  NavLinks,
  NavLogo,
  NavItem,
  MobileIcon,
} from "./NavBarStyled";

const NavBar = ({ href, name }) => {
  const [click, setClick] = useState(false);

  const handelClick = () => setClick(!click);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </NavLogo>
        <MobileIcon onClick={handelClick}>
          {click ? <Close /> : <Hamburger />}
        </MobileIcon>
        <NavLinks onClick={handelClick}>
          <NavItem>
            <Link href="/" passHref>
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
