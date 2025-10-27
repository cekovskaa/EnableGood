import { Outlet } from "react-router-dom";
import NavBar from "../components/ui/NavBar";
import ScrollToTop from "../components/ui/ScrollToTop";

const OnboardingLayout = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default OnboardingLayout;
