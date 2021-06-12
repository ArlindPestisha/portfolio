import { FooterLinks, FooterList, FooterLogo, Wrapper,LeftSide } from "./FooterStyled";
import Link from "next/link";
import { Logo } from "../../public/footerLogo.js";
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
    </Wrapper>
  );
};

export default Footer;
