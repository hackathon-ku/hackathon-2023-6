import React, { useEffect, useState } from 'react';
import HeaderSecondary from '../../../layout/Header/headerSecondary';

import { Input } from '@material-tailwind/react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import http from '../../../api/http';
import EventCard from '../eventCard/eventCard.jsx';

const EventFavorite = () => {
  const [menu, setMenu] = React.useState('');

  const handleChange = (event) => {
    setMenu(event.target.value);
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    let liked_lists = JSON.parse(localStorage.getItem('liked_activity'));
    setData([]);
    liked_lists.map(async (id) => {
      try {
        const res = await http.get(`/activity/${id}`);
        setData((prev) => [...prev, res.data]);
      } catch (err) {
        console.log(err);
      }
    });
  }
  async function reFetch() {
    console.log('refetch');
    fetchData();
  }

  return (
    <div>
      <HeaderSecondary
        headerName={'Event Favorite'}
        previousPage={'/menu/kuevent'}
      />
      <div className="m-3">
        <div>
          <Input label="Search" />
        </div>

        <div className="flex justify-end my-2">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">หมวดหมู่</InputLabel>
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
          {data?.map((activity) => {
            return (
              <EventCard
                data={activity}
                key={activity.activity_id}
                reFetch={reFetch}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventFavorite;
