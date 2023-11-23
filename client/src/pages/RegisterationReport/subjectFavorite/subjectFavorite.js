import React, { useEffect, useState } from "react";
import HeaderSecondary from "../../../layout/Header/headerSecondary";

import { Input } from "@material-tailwind/react";
import SubjectElement from "../subjectElement/subjectElement";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import http from "../../../api/http";

const SubjectFavorite = () => {
  const [subjects, setSubjects] = useState([]);
  const [favFetch, setFavFetch] = useState([]);

  const [searchText, setSearchText] = useState("");

  const fetchMix = async () => {
    try {
      const res = await http.post("/subject", {
        searchText: searchText,
        filter: {},
      });
      setFavFetch(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMix();
  }, [searchText]);

  useEffect(() => {
    const favList = JSON.parse(localStorage.getItem("favoriteSubject"));
    if (!favList) {
      setSubjects([]);
    } else {
      setSubjects(favFetch.filter((item) => favList.includes(item.subject_id)));

    }
  }, [favFetch]);

  const [menu, setMenu] = React.useState("");

  const handleChange = (event) => {
    setMenu(event.target.value);
  };

  return (
    <>
      <HeaderSecondary
        headerName={"Subject Favorite"}
        previousPage={"/menu/subjectSearch"}
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

        {subjects.length < 1 ? (
          <div>No favorite subject</div>
        ) : (
          <div>
            {subjects.map((item) => (
              <SubjectElement subjectInfo={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SubjectFavorite;
