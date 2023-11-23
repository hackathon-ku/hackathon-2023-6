import React from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const SubjectCategory = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  // const [expanded, setExpanded] = React.useState("panel1");

  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };

  return (
    <>
      <div className="m-2">
        <div className="grid grid-cols-2 ">
          <div className="flex justify-center bg-greyCustom-200 rounded-tl-md p-1">
            หมวดการศึกษาทั่วไป
          </div>
          <div className="flex justify-center bg-greyCustom-50 rounded-tr-md p-1">
            30/30
          </div>
        </div>
        <Accordion open={open === 1}>
          <AccordionHeader
            className="bg-secondaryGreen-200 font-normal text-sm flex justify-between border"
            onClick={() => handleOpen(1)}
          >
            <div className="flex ms-1">
              <span>กลุ่มสาระอยู่ดีมีสุข</span>
            </div>

            <div className="px-10"></div>

            <div>
              <span>3/3</span>
              <span></span>
            </div>
          </AccordionHeader>
          <AccordionBody className=" bg-secondaryGreen-50 font-normal text-sm ">
            <div className="m-2">Information</div>
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
};

export default SubjectCategory;

{
  /* <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className="mx-4 bg-secondaryGreen-200 mb-3"
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography sx={{ width: "85%", flexShrink: 0 }}>
              กลุ่มสาระอยู่ดีมีสุข
            </Typography>
            <Typography>3/3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="flex justify-between">
                <span>01999033</span>
                <span>Arts of living</span>
                <span>3 หน่วยกิต</span>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion> */
}
