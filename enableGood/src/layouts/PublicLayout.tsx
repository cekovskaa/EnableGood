import { Outlet } from "react-router-dom";
import NavBar from "../components/ui/NavBar";
import ScrollToTop from "../components/ui/ScrollToTop";
import Footer from "../components/ui/Footer";

const PublicLayout = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
