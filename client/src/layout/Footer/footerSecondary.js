import React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { LiaIdCardAltSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const FooterSecondary = ({
  leftPageName,
  rightPageName,
  leftPage,
  rightPage,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(page);
  };

  const icons = [
    {
      pageName: "Registration Report",
      icon: <LiaIdCardAltSolid size={30} />,
    },
    {
      pageName: "Subject Search",
      icon: <AiOutlineFileSearch size={30} />,
    },
    {
      pageName: "Activity Transcript",
      icon: <AiOutlineFileSearch size={30} />,
    },
    {
      pageName: "KU Event",
      icon: <AiOutlineFileSearch size={30} />,
    },
  ];

  const iconUse = (page) => {
    return icons.find((item) => item.pageName === page);
  };

  return (
    <>
      <div className="grid grid-cols-2 fixed bottom-0 w-screen bg-primaryGreen-200 py-2">
        <div>
          <div className="flex justify-center">
            <button
              className="rounded-full bg-secondaryGreen-50 p-3 cursor-pointer"
              onClick={() => handleNavigate(leftPage)}
            >
              {iconUse(leftPageName).icon}
            </button>
          </div>
          <p className="text-center text-xs text-[0.6rem] pt-2 ">
            {leftPageName}
          </p>
        </div>

        <div>
          <div className="flex justify-center">
            <button
              className="rounded-full bg-secondaryGreen-50 p-3 cursor-pointer"
              onClick={() => handleNavigate(rightPage)}
            >
              {iconUse(rightPageName).icon}
            </button>
          </div>
          <p className="text-center text-xs text-[0.6rem] pt-2 ">
            {rightPageName}
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterSecondary;
