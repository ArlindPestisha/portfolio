import { FooterLogo, Wrapper } from "./FooterStyled";
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
    </Wrapper>
   );
}
 
export default Footer;