import React from "react";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#d6df97",
  // theme.palette.mode === "dark"
  //   ? "rgba(255, 255, 255, .05)"
  //   : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "#e8edc5",
}));

const SubjectCategory = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <div className="me-2">
        <div className="grid grid-cols-2 mx-4 ">
          <div className="flex justify-center bg-greyCustom-200 rounded-tl-md p-1">
            หมวดวิชาศึกษาทั่วไป
          </div>
          <div className="flex justify-center bg-greyCustom-50 rounded-tr-md p-1">
            30/30
          </div>
        </div>
        <Accordion
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
        </Accordion>
      </div>
    </>
  );
};

export default SubjectCategory;
