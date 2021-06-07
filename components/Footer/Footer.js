import { FooterLinks, FooterList, FooterLogo, Wrapper } from "./FooterStyled";
import Link from "next/link";
import { Logo } from "../../public/footerLogo.js";
const Footer = () => {
  return (
    <Wrapper>
      <FooterLogo>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
      </FooterLogo>
      <FooterList>
        <Link href='/'>
          <FooterLinks>HOME</FooterLinks>
        </Link>
        <Link href='/portfolio'>
          <FooterLinks>PORTFOLIO</FooterLinks>
        </Link>
        <Link href='/contact'>
          <FooterLinks>CONTACT</FooterLinks>
        </Link>
      </FooterList>
    </Wrapper>
   );
}
 
export default Footer;