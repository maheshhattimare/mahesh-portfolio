import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../Common/ScrollToTop";

const AppLayout = ({ data }) => {
  return (
    <>
      <ScrollToTop />
      <Navbar socials={data.socials} about={data.about} />
      <Outlet />
      <Footer socials={data.socials} about={data.about} />
    </>
  );
};

export default AppLayout;
