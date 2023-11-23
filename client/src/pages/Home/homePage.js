import React from "react";
import Header from "../../layout/Header/header";
import FooterLayout from "../../layout/Footer/footer";

import HomeQuickMenu from "./HomeQuickMenu/HomeQuickMenu";
import HomeKuEvent from "./HomeKuEvent/homeKuEvent";
import HomeSchedule from "./HomeSchedule/homeSchedule";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="h-[480px] overflow-scroll">
        <HomeQuickMenu />
        <HomeKuEvent />
        <HomeSchedule />
      </div>
      <FooterLayout />
    </>
  );
};

export default HomePage;
