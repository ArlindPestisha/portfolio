import Image from "next/image";
import { HeroWrapper } from "./HeroStyled";

const Hero = () => {
  return (
    <HeroWrapper>
      <Image
        src="/hero.png"
        alt="Picture of the author"
        width={1110}
        height={600}
      />
      <h2>Arlind</h2>
    </HeroWrapper>
  );
};

export default Hero;
