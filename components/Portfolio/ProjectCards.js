import Text from "../Text/Text";
import Image from "next/image";
// import goodList from "../../public/goodList";
import { CardsWrapper, ImageWrapper, TextWrapper } from "./ProjectCardsStyled";

const ProjectCards = ({ src, width, height, heading, heading4 ,paragraph }) => {
  return (
    <CardsWrapper>
      <ImageWrapper>
        {/* <goodList /> */}
        <Image src={src} alt="my-pic" width={width} height={height} objectFit='contain ' />
      </ImageWrapper>
      <TextWrapper>
      <Text heading={heading} paragraph={paragraph} />
      </TextWrapper>
      
    </CardsWrapper>
  );
};

export default ProjectCards;
