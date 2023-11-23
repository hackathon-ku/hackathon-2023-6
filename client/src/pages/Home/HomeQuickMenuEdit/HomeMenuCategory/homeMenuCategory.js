import React from "react";
import HomeMenuElement from "../HomeMenuElement/homeMenuElement";

const HomeMenuCategory = ({ categoryName, menuName }) => {
  return (
    <>
      <div className="m-2 bg-greyCustom-50 pb-2 rounded-md">
        <div className="flex justify-center items-center bg-greyCustom-200 rounded-t-md">
          {categoryName}
        </div>
        <div className="grid grid-cols-4 my-1 flex-wrap ms-2">
          {menuName.map((item) => (
            <HomeMenuElement name={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeMenuCategory;
