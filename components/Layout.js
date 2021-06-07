import Footer from "./Footer/Footer";
import NavBar from "./Nav/NavBar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
