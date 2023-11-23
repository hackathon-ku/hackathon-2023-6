import React, { useEffect, useState } from "react";
import HeaderSecondary from "../../../layout/Header/headerSecondary";
import FooterSecondary from "../../../layout/Footer/footerSecondary";
import { Input } from "@material-tailwind/react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import SubjectElement from "../subjectElement/subjectElement";
import http from "../../../api/http";

const SubjectSearch = () => {
  const [subject, setSubject] = useState([]);

  const [searchText, setSearchText] = useState("");

  const fetchMix = async () => {
    try {
      const res = await http.post("/subject", {
        searchText: searchText,
        filter: {},
      });
      console.log(res);
      setSubject(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMix();
  }, [searchText]);

  const [menu, setMenu] = React.useState("");

  const handleChange = (event) => {
    setMenu(event.target.value);
  };

  return (
    <>
      <HeaderSecondary
        headerName={"Subject Search"}
        previousPage={"/menu"}
        favAble={true}
        favPage={"/menu/subjectFavorite"}
      />

      <div className="m-3">
        <div>
          <Input
            label="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <div className="flex justify-end my-2">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">หมวดหมู่</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={menu}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>อยู่ดีมีสุข</MenuItem>
                <MenuItem value={20}>ศาสตร์แห่งผู้ประกอบการ</MenuItem>
                <MenuItem value={30}>พลเมืองไทยและพลเมืองโลก</MenuItem>
                <MenuItem value={40}>กลุ่มสาระภาษากับการสื่อสาร</MenuItem>
                <MenuItem value={50}>สุนทรียศาสตร์</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <div>
          {subject.map((item) => (
            <SubjectElement subjectInfo={item} />
          ))}
        </div>
      </div>

      <FooterSecondary
        leftPageName={"Registration Report"}
        rightPageName={"Subject Search"}
        leftPage={"/menu/registrationReport"}
        rightPage={"/menu/subjectSearch"}
      />
    </>
  );
};

export default SubjectSearch;
