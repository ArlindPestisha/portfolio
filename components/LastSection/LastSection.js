import { StyledButton } from "../Button/ButtonStyled";
import Text from "../Text/Text";
import {
  SectionWrapper,
  SectionTwoText,
  SectionTwoBtnWrapper,
  Line,
} from "./LastSectionStyled";

const LastSection = () => {
  return (
    <SectionWrapper>
      <SectionTwoText>
        <Text heading4="Interested in doing a project together?" />
      </SectionTwoText>

      <Line></Line>
      <SectionTwoBtnWrapper>
        <StyledButton primary>CONTACT ME</StyledButton>
      </SectionTwoBtnWrapper>
    </SectionWrapper>
  );
};

export default LastSection;
