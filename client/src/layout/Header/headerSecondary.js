import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const HeaderSecondary = ({ headerName }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-primaryGreen-200 p-7 rounded-b-lg drop-shadow-xl mb-2 flex items-center justify-between">
      <div onClick={() => handleGoBack()}>
        <IoIosArrowBack />
      </div>

      <div>
        <h3>{headerName}</h3>
      </div>

      <div></div>
    </div>
  );
};

export default HeaderSecondary;
