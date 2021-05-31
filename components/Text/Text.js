import { TextStyled } from "./TextStyled";

const Text = ({ heading, paragraph }) => {
  return (
    <TextStyled>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
      </TextStyled>
  );
};

export default Text;
