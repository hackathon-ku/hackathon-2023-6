import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { GoBookmarkFill } from "react-icons/go";

import { GoBookmark } from "react-icons/go";

const SubjectElement = () => {
  const [favSubject, setFavSubject] = useState(false);

  const handleFav = (subjectId) => {
    let favList = JSON.parse(localStorage.getItem("favoriteSubject"));

    if (!favList) {
      localStorage.setItem("favoriteSubject", JSON.stringify([subjectId]));
      setFavSubject(true);
      return;
    } else {
      if (favList.find((item) => item === subjectId)) {
        setFavSubject(false);
        favList = favList.filter((item) => item !== subjectId);
        localStorage.setItem("favoriteSubject", JSON.stringify(favList));
      } else {
        setFavSubject(true);
        localStorage.setItem(
          "favoriteSubject",
          JSON.stringify([...favList, subjectId])
        );
      }
    }
  };

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader
          className="font-normal text-sm flex justify-between border"
          onClick={() => handleOpen(1)}
        >
          <div className="flex gap-3 ms-1">
            <span>01999033</span> <span>Arts of Living</span>
          </div>

          <div>
            <span>3 หน่วยกิต</span>
          </div>
        </AccordionHeader>
        <AccordionBody className="bg-greyCustom-100 font-normal text-sm ">
          <div className="flex justify-between m-2">
            <div>Information</div>
            <div>
              <button onClick={() => handleFav()}>
                {favSubject ? (
                  <GoBookmarkFill size={20} />
                ) : (
                  <GoBookmark size={20} />
                )}
              </button>
            </div>
          </div>
          <div className="m-2">Information</div>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default SubjectElement;
