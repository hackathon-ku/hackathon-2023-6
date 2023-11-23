import React from "react";
import HeaderSecondary from "../../../layout/Header/headerSecondary";
import HomeMenuCategory from "./HomeMenuCategory/homeMenuCategory";
import { useNavigate } from "react-router-dom";

const HomeQuickMenuEdit = () => {
  const navigate = useNavigate();
  const handleSave = () => {
    navigate("/");
  };

  const Ku = ["About KU", "KU News", "Faculty Website", "KU Contact"];
  const Nisit = [
    "Nisit Info",
    "Registration Report",
    "Grade Report",
    "Activity Transcript",
    "Nisit Card",
    "Vote",
    "Report",
  ];
  const Class = [
    "Class Schedule",
    "Exam Schedule",
    "Exam Score",
    "Subject Search",
  ];
  const Event = ["KU Event", "Check in", "Scholarship"];
  const Organization = ["Library", "KU Happy Place", "KU Bus"];
  return (
    <>
      <HeaderSecondary headerName={"Quick Menu Setting"} previousPage={"/"} />
      <div>
        <div className="">
          <HomeMenuCategory categoryName={"KU"} menuName={Ku} />
          <HomeMenuCategory categoryName={"Nisit"} menuName={Nisit} />
          <HomeMenuCategory categoryName={"Class"} menuName={Class} />
          <HomeMenuCategory categoryName={"Event"} menuName={Event} />
          <HomeMenuCategory
            categoryName={"Organization"}
            menuName={Organization}
          />
        </div>
      </div>

      <div className="flex justify-center m-4 mb-10">
        <button
          className="rounded-md bg-secondaryGreen-200 px-7"
          onClick={() => handleSave()}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default HomeQuickMenuEdit;
