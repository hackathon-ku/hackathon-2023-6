import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import kuTable from "../../../assets/images/ku-table.png";

const HomeSchedule = () => {
  return (
    <>
      <div className="m-2 flex">
        <div className="bg-[#d9d9d9] p-1"></div>
        <div className="bg-[#d5f2df] flex justify-between w-full p-2">
          <div>KU Event</div>
          <div className="flex gap-1">
            <button className="mt-1">
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>

      <div className="m-2">
        <img src={kuTable} alt="table" />
      </div>
    </>
  );
};

export default HomeSchedule;
