import Image from "next/image";
import Button from "../Button/Button";
import { HeroWrapper, ImageWrapper } from "./HeroStyled";

const Hero = ({ children }) => {
  return (
    <HeroWrapper>
      <ImageWrapper>
        <Image
          src="/carbon.svg"
          alt="Picture of the author"
          width={1110}
          height={600}
        />
      </ImageWrapper>
    </HeroWrapper>
  );
};

export default Hero;
