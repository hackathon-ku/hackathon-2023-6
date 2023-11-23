import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { GoBookmarkFill } from "react-icons/go";

import { GoBookmark } from "react-icons/go";

const SubjectElement = ({ subjectInfo }) => {
  const [favSubject, setFavSubject] = useState(false);

  useEffect(() => {
    const favCheck = JSON.parse(localStorage.getItem("favoriteSubject"));
    if (favCheck) {
      if (favCheck.find((item) => item === subjectInfo.subject_id)) {
        setFavSubject(true);
      }
    }
  });

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

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader
          className="font-normal text-sm border"
          onClick={() => handleOpen(1)}
        >
          <div className="grid grid-cols-3 w-full">
            <div className="col-span-2 flex gap-3 ms-1">
              <span>{subjectInfo.subject_id}</span>{" "}
              <span>{subjectInfo.subject_name_th}</span>
            </div>

            <div className="col-span-1 flex justify-end">
              <span>{subjectInfo.credit} หน่วยกิต</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="bg-greyCustom-100 font-normal text-sm ">
          <div className="flex justify-between m-2">
            <div>Information</div>
            <div>
              <button onClick={() => handleFav(subjectInfo.subject_id)}>
                {favSubject ? (
                  <GoBookmarkFill size={20} />
                ) : (
                  <GoBookmark size={20} />
                )}
              </button>
            </div>
          </div>
          <div className="m-2">
            <p>
              <span className="font-bold">ชื่อวิชาภาษาไทย: </span>
              <span>{subjectInfo.subject_name_th}</span>
            </p>
            <p>
              <span className="font-bold">ชื่อวิชาภาษาอังกฤษ: </span>
              <span>{subjectInfo.subject_name_en}</span>
            </p>
            <p>
              <span className="font-bold">ประเภทวิชา: </span>
              <span>general</span>
            </p>
            <p>
              <span className="font-bold">หมวดหมู่วิชา: </span>
              <span>{subjectInfo.subject_group}</span>
            </p>
            <p>
              <span className="font-bold">หน่วยกิจ: </span>
              <span>{subjectInfo.credit}</span>
            </p>
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default SubjectElement;
