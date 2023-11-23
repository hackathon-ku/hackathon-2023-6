import React, { useEffect, useState } from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import http from "../../../api/http";

const ActivityCategory = () => {
  const [subjects, setSubjects] = useState([]);
  const [userId, setUserId] = useState("");

  const [wellness, setWellness] = useState([]);
  const [entrepreneurship, setEntrepreneurship] = useState([]);
  const [citizen, setCitizen] = useState([]);
  const [language, setLanguage] = useState([]);

  const fetchMyData = async () => {
    try {
      const res = await http.get(`/subject/user/${userId}`);
      setSubjects(res.data);



      setWellness(res.data.general.wellness);
      setEntrepreneurship(res.data.general.entrepreneurship);
      setCitizen(res.data.general.citizen);
      setLanguage(res.data.general.lang);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    setUserId(user.std_id);

    fetchMyData();
  }, []);

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} className="m-2">
        <div className="flex gap-0 mx-2" onClick={() => handleOpen(1)}>
          <AccordionHeader
            className="bg-blue-900 rounded-tl-md font-normal text-sm"
            style={{ width: "70%" }}
          >
            <div className="">
              <span>กิจกรรมมหาลัย</span>
            </div>
          </AccordionHeader>
          <AccordionHeader
            className="bg-[#faa0a0] rounded-tr-md font-normal text-sm flex justify-center"
            style={{ width: "30%" }}
          >
            <div>
              <span>Not Pass</span>
            </div>
          </AccordionHeader>
        </div>
        <AccordionBody className="bg-blue-50 font-normal text-sm mx-2">
          <div className="mx-2 flex justify-center">
            <div>0/13</div>
          </div>
        </AccordionBody>
        <AccordionBody className="bg-greyCustom-100 font-normal text-sm mx-2">
          <div className="m-2"></div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} className="m-2">
        <div className="flex gap-0 mx-2" onClick={() => handleOpen(2)}>
          <AccordionHeader
            className="bg-blue-900 rounded-tl-md font-normal text-sm"
            style={{ width: "70%" }}
          >
            <div className="">
              <span>ด้านพัฒนาคุณธรรมจริยธรรม</span>
            </div>
          </AccordionHeader>
          <AccordionHeader
            className="bg-secondaryGreen-200 rounded-tr-md font-normal text-sm flex justify-center"
            style={{ width: "30%" }}
          >
            <div>
              <span>Pass</span>
            </div>
          </AccordionHeader>
        </div>
        <AccordionBody className="bg-blue-50 font-normal text-sm mx-2">
          <div className="mx-2 flex justify-center">
            <div>14/13</div>
          </div>
        </AccordionBody>
        <AccordionBody className="bg-greyCustom-100 font-normal text-sm mx-2">
          <div className="m-2">
            <div className="">
              <span>ทำความสะอาดโรงเรียน </span>
              <span>14 ชั่วโมง</span>
            </div>
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3} className="m-2">
        <div className="flex gap-0 mx-2" onClick={() => handleOpen(3)}>
          <AccordionHeader
            className="bg-blue-900 rounded-tl-md font-normal text-sm"
            style={{ width: "70%" }}
          >
            <div className="">
              <span>ด้านพัฒนาทักษะการคิดเเละการเรียนรู้</span>
            </div>
          </AccordionHeader>
          <AccordionHeader
            className="bg-[#faa0a0] rounded-tr-md font-normal text-sm flex justify-center"
            style={{ width: "30%" }}
          >
            <div>
              <span>Not Pass</span>
            </div>
          </AccordionHeader>
        </div>
        <AccordionBody className="bg-blue-50 font-normal text-sm mx-2">
          <div className="mx-2 flex justify-center">
            <div>0/16</div>
          </div>
        </AccordionBody>
        <AccordionBody className="bg-greyCustom-100 font-normal text-sm mx-2">
          <div className="m-2"></div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4} className="m-2">
        <div className="flex gap-0 mx-2" onClick={() => handleOpen(4)}>
          <AccordionHeader
            className="bg-blue-900 rounded-tl-md font-normal text-sm"
            style={{ width: "70%" }}
          >
            <div className="">
              <span>เสริมสร้างความสัมพันธ์ระหว่างบุลคลเเละการสื่อสาร</span>
            </div>
          </AccordionHeader>
          <AccordionHeader
            className="bg-[#faa0a0] rounded-tr-md font-normal text-sm flex justify-center"
            style={{ width: "30%" }}
          >
            <div>
              <span>Not Pass</span>
            </div>
          </AccordionHeader>
        </div>
        <AccordionBody className="bg-blue-50 font-normal text-sm mx-2">
          <div className="mx-2 flex justify-center">
            <div>0/13</div>
          </div>
        </AccordionBody>
        <AccordionBody className="bg-greyCustom-100 font-normal text-sm mx-2">
          <div className="m-2"></div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 5} className="m-2">
        <div className="flex gap-0 mx-2" onClick={() => handleOpen(5)}>
          <AccordionHeader
            className="bg-blue-900 rounded-tl-md font-normal text-sm"
            style={{ width: "70%" }}
          >
            <div className="">
              <span>ด้านพัฒนาสุขภาพ</span>
            </div>
          </AccordionHeader>
          <AccordionHeader
            className="bg-[#faa0a0] rounded-tr-md font-normal text-sm flex justify-center"
            style={{ width: "30%" }}
          >
            <div>
              <span>Not Pass</span>
            </div>
          </AccordionHeader>
        </div>
        <AccordionBody className="bg-blue-50 font-normal text-sm mx-2">
          <div className="mx-2 flex justify-center">
            <div>0/19</div>
          </div>
        </AccordionBody>
        <AccordionBody className="bg-greyCustom-100 font-normal text-sm mx-2">
          <div className="m-2"></div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 6} className="m-2">
        <div className="flex gap-0 mx-2" onClick={() => handleOpen(6)}>
          <AccordionHeader
            className="bg-blue-900 rounded-tl-md font-normal text-sm"
            style={{ width: "70%" }}
          >
            <div className="">
              <span>กิจกรรมเพื่อสังคม</span>
            </div>
          </AccordionHeader>
          <AccordionHeader
            className="bg-[#faa0a0] rounded-tr-md font-normal text-sm flex justify-center"
            style={{ width: "30%" }}
          >
            <div>
              <span>Not Pass</span>
            </div>
          </AccordionHeader>
        </div>
        <AccordionBody className="bg-blue-50 font-normal text-sm mx-2">
          <div className="mx-2 flex justify-center">
            <div>0/14</div>
          </div>
        </AccordionBody>
        <AccordionBody className="bg-greyCustom-100 font-normal text-sm mx-2">
          <div className="m-2"></div>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default ActivityCategory;
