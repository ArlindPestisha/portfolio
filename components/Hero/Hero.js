import Image from "next/image";

const Hero = () => {
  return (
    <>
      <h1>Arlind</h1>
      
      <Image
        src="/public/hero.png"
        alt="Picture of the author"
        width={1100}
        height={500}
      />
    </>
  );
};

export default Hero;
