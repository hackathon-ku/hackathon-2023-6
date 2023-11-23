import React from "react";
import HeaderSecondary from "../../layout/Header/headerSecondary";
import FooterSecondary from "../../layout/Footer/footerSecondary";
import ActivityCategory from "./activityCategory/activityCategory";

const ActivityTranscript = () => {
  return (
    <>
      <div className="overflow-hidden">
        <HeaderSecondary
          headerName={"Activity Transcript"}
          previousPage={"/menu"}
        />
        <div className="grid grid-cols-2 m-4">
          <div className="flex justify-center bg-primaryGreen-50 rounded-s-md p-1">
            สถานะ
          </div>
          <div className="flex justify-center bg-[#9be4db] rounded-e-md p-1">
            NOT PASS
          </div>
        </div>

        <ActivityCategory />

        <FooterSecondary
          leftPageName={"Activity Transcript"}
          rightPageName={"KU Event"}
          leftPage={"/menu/activityTranscript"}
          rightPage={"/menu/kuevent"}
        />
      </div>
    </>
  );
};

export default ActivityTranscript;
