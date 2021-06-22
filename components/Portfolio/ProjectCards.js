import Text from "../Text/Text";
import Image from "next/image";
import { CardsWrapper, ImageWrapper, TextWrapper } from "./ProjectCardsStyled";

const ProjectCards = ({ src, width, height, heading, heading4 ,paragraph }) => {
  return (
    <CardsWrapper>
      <ImageWrapper>
        <Image src={src} alt="my-pic" width={width} height={height} />
      </ImageWrapper>
      <TextWrapper>
      <Text heading={heading} paragraph={paragraph} />
      </TextWrapper>
      
    </CardsWrapper>
  );
};

export default ProjectCards;
