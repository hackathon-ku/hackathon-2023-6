import React, { useEffect, useState } from "react";

import { BiSolidReport } from "react-icons/bi";

import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const HomeMenuElement = ({ name }) => {
  const [star, setStar] = useState(false);

  useEffect(() => {
    const favCheck = JSON.parse(localStorage.getItem("favoriteMenu"));
    if (favCheck) {
      if (favCheck.find((item) => item === name)) {
        setStar(true);
      }
    }
  }, []);

  const handleClick = (likeMenu) => {
    let favList = JSON.parse(localStorage.getItem("favoriteMenu"));
    if (!favList) {
      localStorage.setItem("favoriteMenu", JSON.stringify([likeMenu]));
      return;
    } else {
      if (favList.find((item) => item === name)) {
        setStar(false);
        favList = favList.filter((item) => item !== name);
        localStorage.setItem("favoriteMenu", JSON.stringify(favList));
      } else {
        setStar(true);
        localStorage.setItem(
          "favoriteMenu",
          JSON.stringify([...favList, likeMenu])
        );
      }
    }
  };
  const icons = [
    {
      iconName: "About KU",
      icon: <BiSolidReport />,
      linkTo: "",
    },
    {
      iconName: "KU News",
      icon: <BiSolidReport />,
      linkTo: "",
    },
    {
      iconName: "Faculty Website",
      icon: <BiSolidReport />,
      linkTo: "",
    },
    {
      iconName: "KU Contact",
      icon: <BiSolidReport />,
      linkTo: "",
    },
    {
      iconName: "Nisit Info",
      icon: <BiSolidReport />,
      linkTo: "",
    },
    {
      iconName: "Registration Report",
      icon: <BiSolidReport />,
      linkTo: "/menu/registrationReport",
    },
    {
      iconName: "Grade Report",
      icon: <BiSolidReport />,
      linkTo: "",
    },
    {
      iconName: "Activity Transcript",
      icon: <BiSolidReport />,
      linkTo: "/menu/activityTranscript",
    },
    {
      iconName: "Nisit Card",
      icon: <BiSolidReport />,
      linkTo: "",
    },
    {
      iconName: "Vote",
      icon: <BiSolidReport />,
      linkTo: "",
    },
    {
      iconName: "Report",
      icon: <BiSolidReport />,
      linkTo: "",
    },
    {
      iconName: "Class Schedule",
      icon: <BiSolidReport />,
      linkTo: "",
    },
    {
      iconName: "Exam Schedule",
      icon: <BiSolidReport />,
      linkTo: "",
    },
    {
      iconName: "Exam Score",
      icon: <BiSolidReport />,
      linkTo: "",
    },
    {
      iconName: "Subject Search",
      icon: <BiSolidReport />,
      linkTo: "",
    },
    {
      iconName: "KU Event",
      icon: <BiSolidReport />,
      linkTo: "",
    },
    {
      iconName: "Check in",
      icon: <BiSolidReport />,
      linkTo: "",
    },
    {
      iconName: "Scholarship",
      icon: <BiSolidReport />,
      linkTo: "",
    },
    {
      iconName: "Library",
      icon: <BiSolidReport />,
      linkTo: "",
    },
    {
      iconName: "KU Happy Place",
      icon: <BiSolidReport />,
      linkTo: "",
    },
    {
      iconName: "KU Bus",
      icon: <BiSolidReport />,
      linkTo: "",
    },
  ];

  const useIcon = icons.find((item) => item.iconName === name);

  return (
    <>
      <div className="me-3">
        <div className="flex justify-center items-center">
          <button
            className="relative rounded-full bg-secondaryGreen-50 p-3 cursor-pointer"
            onClick={() => handleClick(name)}
          >
            {useIcon && useIcon.icon}
            <div className="absolute top-0 right-0">
              {star ? <FaStar /> : <FaRegStar />}
            </div>
          </button>
        </div>
        <p className="text-center text-xs text-[0.6rem] pt-2 ">{name}</p>
      </div>
    </>
  );
};

export default HomeMenuElement;
