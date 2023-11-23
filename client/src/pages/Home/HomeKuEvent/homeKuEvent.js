import React from "react";
import { FaAngleRight } from "react-icons/fa6";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const HomeKuEvent = () => {
  const [menu, setMenu] = React.useState("");

  const handleChange = (event) => {
    setMenu(event.target.value);
  };

  return (
    <>
      <div className="m-2 flex">
        <div className="bg-[#d9d9d9] p-1"></div>
        <div className="bg-[#d5f2df] flex justify-between w-full p-2">
          <div>KU Event</div>
          <div className="flex gap-1">
            <button className="mt-1">
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-end m-2">
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
      </div>
    </>
  );
};

export default HomeKuEvent;
