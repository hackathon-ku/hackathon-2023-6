import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { TbScan } from "react-icons/tb";
import { LiaIdCardAltSolid } from "react-icons/lia";
import { GoPeople } from "react-icons/go";
import { CgMenuBoxed } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const FooterLayout = () => {
  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate(`${page}`);
  };

  return (
    <>
      <div className="fixed bottom-0 w-screen bg-primaryGreen-200 rounded-t-2xl pt-2">
        <div className="flex justify-evenly">
          <div>
            <button
              className="rounded-full bg-secondaryGreen-50 p-3 cursor-pointer"
              onClick={() => handleClick("/")}
            >
              <IoHomeOutline size={30} />
            </button>
            <p className="flex justify-center text-[0.6rem] pt-2 ">HOME</p>
          </div>
          <div>
            <button className="rounded-full bg-secondaryGreen-50 p-3 cursor-pointer">
              <LiaIdCardAltSolid size={30} />
            </button>
            <p className="flex justify-center text-xs text-[0.6rem] pt-2 ">
              NISIT CARD
            </p>
          </div>
          <div className="relative top-[-20px]">
            <button
              className="relative rounded-full bg-secondaryGreen-50 p-5 cursor-pointer"
              onClick={() => handleClick("/menu")}
            >
              <CgMenuBoxed size={40} />
            </button>
            <p className="flex justify-center text-xs text-[0.6rem] pt-1 ">
              MENU
            </p>
          </div>
          <div>
            <button className="rounded-full bg-secondaryGreen-50 p-3 cursor-pointer">
              <TbScan size={30} />
            </button>
            <p className="flex justify-center text-xs text-[0.6rem] pt-2 ">
              SCAN
            </p>
          </div>
          <div>
            <button className="rounded-full bg-secondaryGreen-50 p-3 cursor-pointer">
              <GoPeople size={30} />
            </button>
            <p className="flex justify-center text-xs text-[0.6rem] pt-2 ">
              KU COMMU
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterLayout;
