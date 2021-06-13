import {
  FooterLinks,
  FooterList,
  FooterLogo,
  Wrapper,
  LeftSide,
  RightSide,
} from "./FooterStyled";
import Link from "next/link";
import { Logo } from "../../public/footerLogo.js";
import { GitHub } from "../../public/github";
import { LinkedIn } from "../../public/linkedin";

const Footer = () => {
  return (
    <Wrapper>
      <LeftSide>
        <FooterLogo>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </FooterLogo>
        <FooterList>
          <Link href="/">
            <FooterLinks>HOME</FooterLinks>
          </Link>
          <Link href="/portfolio">
            <FooterLinks>PORTFOLIO</FooterLinks>
          </Link>
          <Link href="/contact">
            <FooterLinks>CONTACT</FooterLinks>
          </Link>
        </FooterList>
      </LeftSide>
      <RightSide>
        <Link href="https://github.com/ArlindPestisha">
          <a>
            <GitHub />
          </a>
        </Link>
        <div>
          <Link href="https://www.linkedin.com/in/arlind-pestisha-83944b147/">
            <a>
              <LinkedIn />
            </a>
          </Link>
        </div>
      </RightSide>
    </Wrapper>
  );
};

export default Footer;
