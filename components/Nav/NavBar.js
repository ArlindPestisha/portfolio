import Link from "next/link";
import { Logo } from "../../public/logo.js";
import { Hamburger } from "../../public/hamburger";
import { Close } from "../../public/close";
import { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavL,
  NavMenu,
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
        <NavMenu onClick={handelClick} click={click}>
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
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default NavBar;
