import {
  ButtonRight,
  ButtonLeft,
  ImageWrapperLeft,
  ImageWrapperRight,
  TextWrapper,
} from './ButtonPgSty'




const ButtonPg = ({textRight, textLeft, srcLeft, srcRight, width, height}) => {
  return (
    <ButtonLeft>
      <h1>{textLeft}</h1>
      <h4>{textLeft}</h4>
    </ButtonLeft>
   );
}
 
export default ButtonPg;