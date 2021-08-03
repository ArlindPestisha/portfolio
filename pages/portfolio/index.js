import ProjectCards from "../../components/Portfolio/ProjectCards";
import LastSection from "../../components/LastSection/LastSection";


const Portfolio = () => {
  return (
    <div>
      <ProjectCards
        src="/goodSvg.svg"
        width={540}
        height={500}
        heading="The Good List"
        paragraph="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider."
      />
      <ProjectCards
        src="/codava.svg"
        width={540}
        height={500}
        heading="Codava"
      />
      <ProjectCards src="/grp.svg" width={540} height={500} heading="GRP" />
      <LastSection />
    </div>
  );
};

export default Portfolio;
