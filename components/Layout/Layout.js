import Footer from "../Footer/Footer";
import NavBar from "../Nav/NavBar";
import { Container } from "./LayoutS";

const Layout = ({ children }) => {
  return (
    <Container>
      <NavBar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
