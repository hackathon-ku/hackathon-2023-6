import React, { useEffect, useState } from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import http from "../../../api/http";

const SubjectCategory = () => {
  const [subjects, setSubjects] = useState([]);
  const [userId, setUserId] = useState("");

  const [wellness, setWellness] = useState([]);
  const [entrepreneurship, setEntrepreneurship] = useState([]);
  const [citizen, setCitizen] = useState([]);
  const [language, setLanguage] = useState([]);
  const [aesthetics, setAesthetics] = useState([]);

  const fetchMyData = async () => {
    try {
      const res = await http.get(`/subject/user/${userId}`);
      setSubjects(res.data);
      console.log("use res:", res.data);
      console.log(res.data.general.wellness);

      setWellness(res.data.general.wellness);
      setEntrepreneurship(res.data.general.entrepreneurship);
      setCitizen(res.data.general.citizen);
      setLanguage(res.data.general.lang);
      setAesthetics(res.data.general.aesthetics);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    console.log(user.std_id);
    setUserId(user.std_id);

    fetchMyData();
  }, []);

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="m-2">
        <div className="grid grid-cols-2 ">
          <div className="flex justify-center bg-greyCustom-200 rounded-tl-md p-1">
            หมวดการศึกษาทั่วไป
          </div>
          <div className="flex justify-center bg-greyCustom-50 rounded-tr-md p-1">
            6/30
          </div>
        </div>
        <Accordion open={open === 1}>
          <AccordionHeader
            className={`${
              wellness.is_pass === true
                ? "bg-secondaryGreen-200"
                : "bg-[#ffb6b6]"
            } font-normal text-sm flex justify-between border`}
            onClick={() => handleOpen(1)}
          >
            <div className="flex ms-1">
              <span>กลุ่มสาระอยู่ดีมีสุข (Wellness)</span>
            </div>

            <div className="px-10"></div>

            <div className="flex justify-end">
              <span>
                {wellness.credits}/{wellness.require}
              </span>
            </div>
          </AccordionHeader>
          <AccordionBody
            className={`${
              wellness.is_pass === true
                ? "bg-secondaryGreen-50"
                : "bg-[#ffd9d9]"
            } font-normal text-sm `}
          >
            <div className="m-2 w-full">
              {wellness?.subject?.map((item) => (
                <div className="grid grid-cols-4 my-1">
                  <div className="col-span-3">
                    <span>{item.subject_id}</span>{" "}
                    <span>{item.subject_name_th}</span>
                  </div>
                  <div className="col-span-1">
                    <span>{item.credit}</span> <span>หน่วยกิจ</span>
                  </div>
                </div>
              ))}
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 2}>
          <AccordionHeader
            className={`${
              entrepreneurship.is_pass === true
                ? "bg-secondaryGreen-200"
                : "bg-[#ffb6b6]"
            } font-normal text-sm flex justify-between border`}
            onClick={() => handleOpen(2)}
          >
            <div className="flex ms-1">
              <span>กลุ่มสาระศาสตร์แห่งผู้ประกอบการ (Entrepreneurship)</span>
            </div>

            <div className="px-10"></div>

            <div className="flex justify-end">
              <span>
                {entrepreneurship.credits}/{entrepreneurship.require}
              </span>
            </div>
          </AccordionHeader>
          <AccordionBody
            className={`${
              entrepreneurship.is_pass === true
                ? "bg-secondaryGreen-50"
                : "bg-[#ffd9d9]"
            } font-normal text-sm `}
          >
            <div className="m-2 w-full">
              {entrepreneurship?.subject?.map((item) => (
                <div className="grid grid-cols-4 my-1">
                  <div className="col-span-3">
                    <span>{item.subject_id}</span>{" "}
                    <span>{item.subject_name_th}</span>
                  </div>
                  <div className="col-span-1">
                    <span>{item.credit}</span> <span>หน่วยกิจ</span>
                  </div>
                </div>
              ))}
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3}>
          <AccordionHeader
            className={`${
              citizen.is_pass === true
                ? "bg-secondaryGreen-200"
                : "bg-[#ffb6b6]"
            } font-normal text-sm flex justify-between border`}
            onClick={() => handleOpen(3)}
          >
            <div className="flex ms-1">
              <span>
                กลุ่มสาระพลเมืองไทยและพลเมืองโลก (Thai Citizen and Global
                Citizen)
              </span>
            </div>

            <div className="px-10"></div>

            <div className="flex justify-end">
              <span>
                {citizen.credits}/{citizen.require}
              </span>
            </div>
          </AccordionHeader>
          <AccordionBody
            className={`${
              citizen.is_pass === true ? "bg-secondaryGreen-50" : "bg-[#ffd9d9]"
            } font-normal text-sm `}
          >
            <div className="m-2 w-full">
              {citizen?.subject?.map((item) => (
                <div className="grid grid-cols-4 my-1">
                  <div className="col-span-3">
                    <span>{item.subject_id}</span>{" "}
                    <span>{item.subject_name_th}</span>
                  </div>
                  <div className="col-span-1">
                    <span>{item.credit}</span> <span>หน่วยกิจ</span>
                  </div>
                </div>
              ))}
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 4}>
          <AccordionHeader
            className={`${
              language.is_pass === true
                ? "bg-secondaryGreen-200"
                : "bg-[#ffb6b6]"
            } font-normal text-sm flex justify-between border`}
            onClick={() => handleOpen(4)}
          >
            <div className="flex ms-1">
              <span>
                กลุ่มสาระภาษากับการสื่อสาร (Language and Communication)
              </span>
            </div>

            <div className="px-10"></div>

            <div className="flex justify-end">
              <span>
                {language.credits}/{language.require}
              </span>
            </div>
          </AccordionHeader>
          <AccordionBody
            className={`${
              language.is_pass === true
                ? "bg-secondaryGreen-50"
                : "bg-[#ffd9d9]"
            } font-normal text-sm `}
          >
            <div className="m-2 w-full">
              {language?.subject?.map((item) => (
                <div className="grid grid-cols-4 my-1">
                  <div className="col-span-3">
                    <span>{item.subject_id}</span>{" "}
                    <span>{item.subject_name_th}</span>
                  </div>
                  <div className="col-span-1">
                    <span>{item.credit}</span> <span>หน่วยกิจ</span>
                  </div>
                </div>
              ))}
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 5}>
          <AccordionHeader
            className={`${
              aesthetics.is_pass === true
                ? "bg-secondaryGreen-200"
                : "bg-[#ffb6b6]"
            } font-normal text-sm flex justify-between border`}
            onClick={() => handleOpen(5)}
          >
            <div className="flex ms-1">
              <span>กลุ่มสาระสุนทรียศาสตร์ (Aesthetics)</span>
            </div>

            <div className="px-10"></div>

            <div className="flex justify-end">
              <span>
                {aesthetics.credits}/{aesthetics.require}
              </span>
            </div>
          </AccordionHeader>
          <AccordionBody
            className={`${
              aesthetics.is_pass === true
                ? "bg-secondaryGreen-50"
                : "bg-[#ffd9d9]"
            } font-normal text-sm `}
          >
            <div className="m-2 w-full">
              {aesthetics?.subject?.map((item) => (
                <div className="grid grid-cols-4 my-1">
                  <div className="col-span-3">
                    <span>{item.subject_id}</span>{" "}
                    <span>{item.subject_name_th}</span>
                  </div>
                  <div className="col-span-1">
                    <span>{item.credit}</span> <span>หน่วยกิจ</span>
                  </div>
                </div>
              ))}
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
};

export default SubjectCategory;
