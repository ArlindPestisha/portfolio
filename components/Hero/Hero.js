import Image from "next/image";
import Button from "../Button/Button";
import { HeroWrapper } from "./HeroStyled";


const Hero = ({ children }) => {
  return (
    <HeroWrapper>
      <Image
        src="/public/hero1.png"
        alt="Picture of the author"
        width={1110}
        height={600}
      />
      <Button />
    </HeroWrapper>
  );
};

export default Hero;
