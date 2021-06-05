import { H2, H4, ParagraphStyled } from "./TextStyled";

const Text = ({ heading, heading4 ,paragraph }) => {
  return (
    <div>
      <H2>
        {heading}
      </H2>
      <H4>{heading4}</H4>
      <ParagraphStyled>
        {paragraph}
      </ParagraphStyled>
    </div>
  );
};

export default Text;
