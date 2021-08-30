import { Container, WrapperImg, Wrapper, TextWrapper, ButtonWrapper, TextWrapper2 } from "./TglStyled";
import Image from "next/image";
import Text from "../../components/Text/Text";
import Link from "next/link";
import { StyledButton } from "../../components/Button/ButtonStyled"
import LastSection from "../../components/LastSection/LastSection"

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
        <TextWrapper2>
          <Text heading4="Project Background" paragraph="This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style." />
          <Text heading4="Static Previews" />
          
        <Image src="/tgl.svg" width={635} height={400} />
        <Image src="/tgl.svg" width={635} height={400} />
        </TextWrapper2>
      </Wrapper>
      <LastSection />
    </Container>
  );
};

export default Tgl;
