import ProjectCards from "../../components/Portfolio/ProjectCards";
import Text from "../../components/Text/Text";
const Portfolio = () => {
  return (
    <div>
      <ProjectCards src="/codava.png" width={540} height={500}
        heading='Codava' paragraph='This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.'
      />
      <ProjectCards src="/codava.png" width={540} height={500}
        heading='Codava' 
      />
      {/* <Text heading='Yes' paragraph='lorisdhh shahdhahh' /> */}
    </div>
  );
};

export default Portfolio;
