import {
  Line,
  H1,
  Container,
  TextWrapperP,
  Wrapper,
  SocialW,
  LinkInWrapper,
} from "../components/contactStyled";

import Link from "next/link";

import { GitHubWhite } from "../public/githubWhite";

const Contact = () => {
  return (
    <Container>
      <Line></Line>
      <Wrapper>
        <H1>
          {/* <Text heading="Get in touch" /> */}
          <h1>Get in touch</h1>
        </H1>

        <TextWrapperP>
          I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in a company
          in Sweden. But I’m also happy to hear about opportunities that don’t
          fit that description. I’m a hard-working and positive person who will
          always approach each task with a sense of purpose and attention to
          detail. Please do feel free to check out my online profiles below and
          you can contact me at:
          <a href="mailto:arlind.pestisha@gmail.com">
            {" "}
            arlind.pestisha@gmail.com
          </a>
        </TextWrapperP>
      </Wrapper>
      <SocialW>
        <Link href="https://github.com/ArlindPestisha">
          <a>
            <GitHubWhite />
          </a>
        </Link>
        <LinkInWrapper>
          <Link href="https://github.com/ArlindPestisha">
            <a>
              <GitHubWhite />
            </a>
          </Link>
        </LinkInWrapper>
      </SocialW>

      <Line></Line>
    </Container>
  );
};

export default Contact;
