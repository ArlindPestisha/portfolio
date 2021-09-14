import Text from "../Text/Text";
import Image from "next/image";

import {
  CardsWrapper,
  ImageWrapper,
  TextWrapper,
  ButtonWrapper,
} from "./ProjectCardsStyled";

const ProjectCards = ({
  src,
  width,
  height,
  heading,
  heading4,
  paragraph,
  children,
}) => {
  return (
    <CardsWrapper>
      <ImageWrapper>
        <Image
          src={src}
          alt="my-pic"
          width={width}
          height={height}
          objectFit="contain"
        />
      </ImageWrapper>
      <TextWrapper>
        <Text heading={heading} paragraph={paragraph} />
        <ButtonWrapper>{children}</ButtonWrapper>
      </TextWrapper>
    </CardsWrapper>
  );
};

export default ProjectCards;
