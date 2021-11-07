import {
  Container,
  WrapperImg,
  Wrapper,
  TextWrapper,
  ButtonWrapper,
  TextWrapper2,
  ImageWrapper2,
  WrapperPagination,
  ButtonRight,
  ImageWrapperRight,
  TextWrapperPagination,
  ButtonLeft,
  ImageWrapperLeft,
  TextColor,
  Anchor,
} from "../../components/TglStyled";
import Image from "next/image";
import Text from "../../components/Text/Text";
import Link from "next/link";
import { StyledButton } from "../../components/Button/ButtonStyled";
import LastSection from "../../components/LastSection/LastSection";

const Tgl = () => {
  return (
    <Container>
      <WrapperImg>
        <Image src="/tgl.svg" width={1110} height={500} />
      </WrapperImg>
      <Wrapper>
        <TextWrapper>
          <Text
            heading="Manage"
            paragraph="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.
          "
          />
          <TextColor>
            {/* <Text paragraph="Interaction Design / Front End Development" />
            <Text paragraph="HTML / CSS / JS" /> */}
            <p>Interaction Design / Front End Development</p>
            <p>HTML / CSS / JS</p>
          </TextColor>

          <ButtonWrapper>
            <Link href="/portfolio">
              <StyledButton primary>GO TO PORTFOLIO</StyledButton>
            </Link>
          </ButtonWrapper>
        </TextWrapper>
        <TextWrapper2>
          <Text
            heading4="Project Background"
            paragraph="A platform to connect companies and creative freelancers. I built this using NextJS, SASS and Contentful CMS. The platform is designed to be fully responsive. During this project I had to work with multiple stakeholders: the client, my team, graphic designers and myself. 
            "
          />
          <Link href="https://thegoodlist.com/">
            <a>
              <Anchor>The Good List Website</Anchor>
            </a>
          </Link>

          {/* <Text heading4="Static Previews" />
          <Image src="/tgl.svg" width={635} height={400} />
          <Image src="/tgl.svg" width={635} height={400} /> */}
        </TextWrapper2>
      </Wrapper>

      {/* Fix this part in a component */}
      <WrapperPagination>
        <Link href="/portfolio/FindMovie">
          <ButtonRight>
            <ImageWrapperRight>
              <Image src="/arrow-left.svg" width={8} height={16} />
            </ImageWrapperRight>
            <TextWrapperPagination>
              <h1>Find your Movie</h1>
              <h4>Previous Project</h4>
            </TextWrapperPagination>
          </ButtonRight>
        </Link>

        <Link href="/portfolio/PortfolioCase">
          <ButtonLeft>
            <TextWrapperPagination>
              <h1>Portfolio</h1>
              <h4>Next Project</h4>
            </TextWrapperPagination>
            <ImageWrapperLeft>
              <Image src="/arrow-right.svg" width={8} height={16} />
            </ImageWrapperLeft>
          </ButtonLeft>
        </Link>
      </WrapperPagination>
      {/* <Pagination>
        <Link href="/portfolio/Tgl">
          <StyledButton primary>Call</StyledButton>
        </Link>
        <Link href="/portfolio/codava">
        <StyledButton third>
          Call
        </StyledButton>
      </Link>
      </Pagination> */}

      <LastSection />
    </Container>
  );
};

export default Tgl;
