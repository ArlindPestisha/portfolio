import ProjectCards from "../../components/Portfolio/ProjectCards";
import { StyledButton } from "../../components/Button/ButtonStyled";
import {
  
  SectionWrapper,
  SectionTwoText,
  SectionTwoBtnWrapper,
  Line
} from "../../components/Portfolio/ProjectCardsStyled";

import Text from "../../components/Text/Text";
import LastSection from "../../components/LastSection/LastSection";
const Portfolio = () => {
  return (
    <div>
      <ProjectCards
        src="/goodSvg.svg"
        width={540}
        height={500}
        heading="The Good List"
        paragraph="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider."
        
      />
      <ProjectCards
        src="/codava.svg"
        width={540}
        height={500}
        heading="Codava"
      />
      <ProjectCards
        src="/grp.svg"
        width={540}
        height={500}
        heading="GRP"
      />
      <LastSection />
      {/* <SectionWrapper>
        <SectionTwoText>
          <Text heading4="Interested in doing a project together?" />
        </SectionTwoText>
        <Line></Line>
        <SectionTwoBtnWrapper>
          <StyledButton primary>CONTACT ME</StyledButton>
        </SectionTwoBtnWrapper>
      </SectionWrapper> */}
      {/* <Text heading='Yes' paragraph='lorisdhh shahdhahh' /> */}
    </div>
  );
};

export default Portfolio;
