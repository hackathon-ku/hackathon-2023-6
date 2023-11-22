import React from "react";
import KUlogo from "../../assets/KUlogo/KUlogo.png";
import profile1 from "../../assets/profile/profile1.webp";
import { MdOutlineNotificationsActive } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-primaryGreen-200 p-4 flex justify-between rounded-b-lg drop-shadow-xl mb-2">
      <div className="flex items-center">
        <img src={KUlogo} alt="logo" className="object-cover h-10" />
      </div>

      <div className="flex items-center gap-3">
        <div className="">
          <MdOutlineNotificationsActive size={35} />
        </div>
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img
            src={profile1}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
