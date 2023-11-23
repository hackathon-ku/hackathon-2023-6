import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import MenuElement from "../../Menu/MenuElement/menuElement";

const HomeQuickMenu = () => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/editHomeMenu");
  };

  const [favMenu, setFavMenu] = useState([]);

  useEffect(() => {
    let fav = JSON.parse(localStorage.getItem("favoriteMenu"));
    setFavMenu(fav);
  }, []);

  return (
    <>
      <div className="m-2 flex">
        <div className="bg-[#d9d9d9] p-1"></div>
        <div className="bg-[#d5f2df] flex justify-between w-full p-2">
          <div>Quick menu</div>
          <button
            className="flex gap-1 text-[#76797e]"
            onClick={() => handleEdit()}
          >
            <span>setting</span>
            <span className="mt-1">
              <IoSettingsOutline />
            </span>
          </button>
        </div>
      </div>

      <div>
        {favMenu.length < 1 ? (
          <div className="m-4 mx-8 text-gray-600">Quick Menu not set</div>
        ) : (
          <div className="grid grid-cols-5 m-4">
            {favMenu.map((item) => (
              <MenuElement name={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HomeQuickMenu;
