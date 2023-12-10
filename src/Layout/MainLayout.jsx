import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Banner from "../Components/Header/Banner";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
