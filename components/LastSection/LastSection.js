import Link from "next/link";
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
        <Link href="/contact">
          <StyledButton primary>CONTACT ME</StyledButton>
        </Link>
      </SectionTwoBtnWrapper>
    </SectionWrapper>
  );
};

export default LastSection;
