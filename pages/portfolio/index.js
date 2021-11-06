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
        paragraph="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider."
      >
        <Link href="/portfolio/Tgl">
          <StyledButton primary>VIEW PROJECT</StyledButton>
        </Link>
      </ProjectCards>
      <ProjectCards
        src="/codava.svg"
        width={540}
        height={500}
        heading="Portfolio"
        paragraph="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider."
      >
        <Link href="/portfolio/PortfolioCase">
          <StyledButton primary>VIEW PROJECT</StyledButton>
        </Link>
      </ProjectCards>
      <ProjectCards
        src="/grp.svg"
        width={540}
        height={500}
        heading="Find Your Movie"
        paragraph="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider."
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
