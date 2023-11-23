import React from "react";
import HeaderSecondary from "../../../layout/Header/headerSecondary";

import { Input } from "@material-tailwind/react";
import SubjectElement from "../subjectElement/subjectElement";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SubjectFavorite = () => {
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
          <Input label="Search" />
        </div>

        <div className="flex justify-end my-2">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Menu</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={menu}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>menu1</MenuItem>
                <MenuItem value={20}>menu2</MenuItem>
                <MenuItem value={30}>menu3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <div>
          <SubjectElement />
        </div>
      </div>
    </>
  );
};

export default SubjectFavorite;
