import { H2, ParagraphStyled } from "./TextStyled";

const Text = ({ heading, paragraph }) => {
  return (
    <div>
      <H2>
        {heading}
      </H2>
      <ParagraphStyled>
        {paragraph}
      </ParagraphStyled>
    </div>
  );
};

export default Text;
