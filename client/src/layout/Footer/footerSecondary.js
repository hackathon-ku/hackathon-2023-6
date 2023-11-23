import React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { LiaIdCardAltSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const FooterSecondary = ({ leftPage, rightPage }) => {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(page);
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
              <LiaIdCardAltSolid size={30} />
            </button>
          </div>
          <p className="text-center text-xs text-[0.6rem] pt-2 ">
            Registration Report
          </p>
        </div>

        <div>
          <div className="flex justify-center">
            <button
              className="rounded-full bg-secondaryGreen-50 p-3 cursor-pointer"
              onClick={() => handleNavigate(rightPage)}
            >
              <AiOutlineFileSearch size={30} />
            </button>
          </div>
          <p className="text-center text-xs text-[0.6rem] pt-2 ">
            Subject Search
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterSecondary;
