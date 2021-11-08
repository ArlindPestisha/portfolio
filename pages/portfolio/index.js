import ProjectCards from "../../components/Portfolio/ProjectCards";
import LastSection from "../../components/LastSection/LastSection";
import { StyledButton } from "../../components/Button/ButtonStyled";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div>
      <ProjectCards
        src="/goodSvg.svg"
        width={540}
        height={500}
        heading="The Good List"
        paragraph="This project required me to build a fully responsive landing page to the designs provided. I used NextJS, along with SASS and Contentful CMS."
      >
        <Link href="/portfolio/Tgl">
          <StyledButton primary>VIEW PROJECT</StyledButton>
        </Link>
      </ProjectCards>
      <ProjectCards
        src="/portfolio.svg"
        width={540}
        height={500}
        heading="Portfolio"
        paragraph="This is a project that I am proud of because my main goal for this project was to learn a new technology which I enjoyed a lot to work with styled-components."
      >
        <Link href="/portfolio/PortfolioCase">
          <StyledButton primary>VIEW PROJECT</StyledButton>
        </Link>
      </ProjectCards>
      <ProjectCards
        src="/findmovie.svg"
        width={540}
        height={500}
        heading="Find Your Movie"
        paragraph="This is a side project that I have built to develop my React skills, and also to try out how to test with React Testing Library."
      >
        <Link href="/portfolio/FindMovie">
          <StyledButton primary>VIEW PROJECT</StyledButton>
        </Link>
      </ProjectCards>
      <LastSection />
    </div>
  );
};

export default Portfolio;
