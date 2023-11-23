import React from "react";
import HeaderSecondary from "../../layout/Header/headerSecondary";
import SubjectCategory from "./subjectCategory/subjectCategory";
import FooterSecondary from "../../layout/Footer/footerSecondary";

const RegisIndex = () => {
  return (
    <>
      <HeaderSecondary
        headerName={"Registration Report"}
        previousPage={"/menu"}
      />
      <div className="grid grid-cols-2 m-4 ">
        <div className="flex justify-center bg-primaryGreen-50 rounded-s-md p-1">
          หน่วยกิจสะสม
        </div>
        <div className="flex justify-center bg-[#9be4db] rounded-e-md p-1">
          57
        </div>
      </div>

      <SubjectCategory />

      <SubjectCategory />

      <FooterSecondary
        leftPageName={"Registration Report"}
        rightPageName={"Subject Search"}
        leftPage={"/menu/registrationReport"}
        rightPage={"/menu/subjectSearch"}
      />
    </>
  );
};

export default RegisIndex;
