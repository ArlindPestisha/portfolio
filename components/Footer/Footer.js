import {
  FooterLinks,
  FooterList,
  FooterLogo,
  Wrapper,
  LeftSide,
  RightSide,
  Github,
  SecondLink
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
          <SecondLink>
          <Link href="/portfolio">
            <FooterLinks>PORTFOLIO</FooterLinks>
          </Link>
          </SecondLink>
          
          <Link href="/contact">
            <FooterLinks>CONTACT</FooterLinks>
          </Link>
        </FooterList>
      </LeftSide>
      <RightSide>
        <Github>
          <Link href="https://github.com/ArlindPestisha">
            <a>
              <GitHub />
            </a>
          </Link>
        </Github>
        <Link href="https://www.linkedin.com/in/arlind-pestisha-83944b147/">
          <a>
            <LinkedIn />
          </a>
        </Link>
      </RightSide>
    </Wrapper>
  );
};

export default Footer;
