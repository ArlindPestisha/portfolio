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
} from "../../components/FindYourMovie.js";
import Image from "next/image";
import Text from "../../components/Text/Text";
import Link from "next/link";
import { StyledButton } from "../../components/Button/ButtonStyled";
import LastSection from "../../components/LastSection/LastSection";

const Tgl = () => {
  return (
    <Container>
      <WrapperImg>
        <Image src="/findyoumovie.svg" width={1110} height={500} />
      </WrapperImg>
      <Wrapper>
        {/* <TextWrapper>
          <Text
            heading="Find Your Movie"
            paragraph="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.
          "
          />
          <TextColor>
            <p>Interaction Design / Front End Development</p>
            <p>REACT / CSS / FIGMA</p>
          </TextColor>

          <ButtonWrapper>
            <Link href="/portfolio">
              <StyledButton primary>GO TO PORTFOLIO</StyledButton>
            </Link>
          </ButtonWrapper>
        </TextWrapper> */}
        <TextWrapper2>
          <Text
            heading4="Find Your Movie"
            paragraph="A fun project with a pretty cool outcome. The goal was to find the next movie to watch. Too much time is spent scrolling on Netflix. Find Your Movie was created to find a solution to that. I used React and CSS aswell as React Testing Library to build the website and the content came from linking OMDB’s API."
          />
          <Link href="https://movietest-six.vercel.app/">
            <a>
              <Anchor>Find Your Movie Website</Anchor>
            </a>
          </Link>
          <TextColor>
            <p>Interaction Design / Front End Development</p>
            <p>REACT / CSS / FIGMA</p>
          </TextColor>
          {/* <Text heading4="Static Previews" />
          <Image src="/tgl.svg" width={635} height={400} />
          <Image src="/tgl.svg" width={635} height={400} /> */}
        </TextWrapper2>
      </Wrapper>

      {/* Fix this part in a component */}
      <WrapperPagination>
        <Link href="/portfolio/PortfolioCase">
          <ButtonRight>
            <ImageWrapperRight>
              <Image src="/arrow-left.svg" width={8} height={16} />
            </ImageWrapperRight>
            <TextWrapperPagination>
              <h1>Portfolio</h1>
              <h4>Previous Project</h4>
            </TextWrapperPagination>
          </ButtonRight>
        </Link>
        <Link href="/portfolio/Tgl">
          <ButtonLeft>
            <TextWrapperPagination>
              <h1>The Good List</h1>
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
