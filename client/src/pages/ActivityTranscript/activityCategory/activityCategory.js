import React from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const ActivityCategory = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} className="m-2">
        <div className="flex gap-0 mx-2" onClick={() => handleOpen(1)}>
          <AccordionHeader
            className="bg-purple-900 rounded-tl-md font-normal text-sm"
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
        <AccordionBody className="bg-purple-50 font-normal text-sm mx-2">
          <div className="mx-2 flex justify-center">
            <div>23/13</div>
          </div>
        </AccordionBody>
        <AccordionBody className="bg-greyCustom-100 font-normal text-sm mx-2">
          <div className="m-2">Information</div>
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
            <div>23/13</div>
          </div>
        </AccordionBody>
        <AccordionBody className="bg-greyCustom-100 font-normal text-sm mx-2">
          <div className="m-2">Information</div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3} className="m-2">
        <div className="flex gap-0 mx-2" onClick={() => handleOpen(3)}>
          <AccordionHeader
            className="bg-yellow-900 rounded-tl-md font-normal text-sm"
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
        <AccordionBody className="bg-yellow-50 font-normal text-sm mx-2">
          <div className="mx-2 flex justify-center">
            <div>23/13</div>
          </div>
        </AccordionBody>
        <AccordionBody className="bg-greyCustom-100 font-normal text-sm mx-2">
          <div className="m-2">Information</div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4} className="m-2">
        <div className="flex gap-0 mx-2" onClick={() => handleOpen(4)}>
          <AccordionHeader
            className="bg-pink-900 rounded-tl-md font-normal text-sm"
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
        <AccordionBody className="bg-pink-50 font-normal text-sm mx-2">
          <div className="mx-2 flex justify-center">
            <div>23/13</div>
          </div>
        </AccordionBody>
        <AccordionBody className="bg-greyCustom-100 font-normal text-sm mx-2">
          <div className="m-2">Information</div>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default ActivityCategory;
