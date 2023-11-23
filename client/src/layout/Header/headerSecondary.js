import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { GoBookmarkFill } from "react-icons/go";

const HeaderSecondary = ({ headerName, previousPage, favAble, favPage }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(previousPage);
  };

  const handleClick = (page) => {
    navigate(page);
  };
  
  return (
    <div className="bg-primaryGreen-200 p-7 rounded-b-lg drop-shadow-xl mb-2 flex items-center justify-between">
      <div onClick={() => handleGoBack()}>
        <IoIosArrowBack />
      </div>

      <div>
        <h3>{headerName}</h3>
      </div>

      <div>
        {favAble && (
          <div>
            <button onClick={() => handleClick(favPage)}>
              <GoBookmarkFill size={30} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderSecondary;
