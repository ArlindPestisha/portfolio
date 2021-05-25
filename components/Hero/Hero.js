import Image from "next/image";
import Buttons from "../Button/Button";
import { HeroWrapper } from "./HeroStyled";


const Hero = ({ children }) => {
  return (
    <HeroWrapper>
      <Image
        src="/hero1.png"
        alt="Picture of the author"
        width={1110}
        height={600}
      />
      <Buttons />
    </HeroWrapper>
  );
};

export default Hero;
