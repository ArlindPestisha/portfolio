import { Container, WrapperImg, Wrapper, TextWrapper, ButtonWrapper } from "./TglStyled";
import Image from "next/image";
import Text from "../../components/Text/Text";
import Link from "next/link";
import {StyledButton} from "../../components/Button/ButtonStyled"

const Tgl = () => {
  return (
    <Container>
      <WrapperImg>
        <Image src="/tgl.svg" width={1110} height={500} />
      </WrapperImg>
      <Wrapper>
        <TextWrapper>
          <Text heading="Manage" paragraph="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.
          "
          />
          <Text
            paragraph="Interaction Design / Front End Development"

          />
          <Text
            paragraph="HTML / CSS / JS"
          />
          <ButtonWrapper>
          <Link href="/portfolio">
            <StyledButton primary>GO TO PORTFOLIO</StyledButton>
          </Link>
        </ButtonWrapper>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
};

export default Tgl;
