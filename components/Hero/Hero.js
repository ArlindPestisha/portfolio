import Image from "next/image";
import Button from "../Button/Button";
import { HeroWrapper, ImageWrapper } from "./HeroStyled";
import Link from "next/link";

const Hero = ({ children }) => {
  const handelClick = () => {
    // console.log( 'you clicked');
    return (
      <Link href="/about" alt="justMe" target='_blank'>
        <a>ABOUT ME</a>
      </Link>
    );
  };
  return (
    <HeroWrapper>
      <ImageWrapper>
        <Image
          src="/public/carbon.svg"
          alt="Picture of the author"
          width={1110}
          height={600}
        />
      </ImageWrapper>
      <Button handelClick={handelClick} text="ABOUT ME" />
    </HeroWrapper>
  );
};

export default Hero;
