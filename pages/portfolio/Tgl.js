import { Container, WrapperImg } from "./TglStyled";
import Image from 'next/image'

const Tgl = () => {
  return (
    <Container>
      <WrapperImg>
      <Image src='/tgl.svg' width={1110} height={500} />
      </WrapperImg>
      
    </Container>
  );
};

export default Tgl;
