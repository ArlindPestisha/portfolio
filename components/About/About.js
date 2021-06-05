import Text from "../Text/Text";
import Image from "next/image";
import Button from "../Button/Button";
import {
  AboutWrapper,
  ButtonWrapper,
  ImageWrapper,
  SectionWrapper,
  TextWrapper,
} from "./AboutStyled";
import { StyledButton } from "../Button/ButtonStyled";

const About = () => {
  return (
    <AboutWrapper>
      <ImageWrapper>
        <Image src="/arlindpe.jpeg" alt="my-pic" width={540} height={650} />
      </ImageWrapper>
      <TextWrapper>
        <Text
          heading="About Me"
          paragraph="I’m a front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in Malmö, Sweden, but am happiest working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, running or cycling. I’d love for you to check out my work."
        />
        <ButtonWrapper>
          <Button text="GO TO PORTFOLIO" />
        </ButtonWrapper>
      </TextWrapper>
      <div>
        <div>
          <Text paragraph="Interested in doing a project together?" />
        </div>

        <div></div>
        <div>
          <StyledButton primary >CONTACT ME</StyledButton>
        </div>
        </div>
      
    </AboutWrapper>
  );
};

export default About;
