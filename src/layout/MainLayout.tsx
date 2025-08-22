import { memo } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col gap-5"> 
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default memo(MainLayout);
