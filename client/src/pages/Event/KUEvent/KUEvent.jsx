import React, { useCallback, useEffect, useState } from 'react';
import HeaderSecondary from '../../../layout/Header/headerSecondary';
import FooterSecondary from '../../../layout/Footer/footerSecondary';
import { Input } from '@material-tailwind/react';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import EventCard from '../eventCard/eventCard.jsx';
import http from '../../../api/http';

import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

// import SubjectElement from '../subjectElement/subjectElement';

const SubjectSearch = () => {
  const [menu, setMenu] = React.useState('');
  const [sort, setSort] = React.useState('today');

  const [date, setDate] = useState(dayjs(new Date()));

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  async function fetchData() {
    try {
      if (sort === 'today') {
        // setDate(dayjs(new Date()));
      }
      const requestedDate = new Date(date).setUTCHours(0, 0, 0, 0);
      const endOfDay = new Date(date).setUTCHours(23, 59, 59, 59);
      // if (date) {
      //   filter = { register_date: { start_date: date } };
      // }
      // if(activity_type){
      //   filter['activity_type'] = activity_type
      // }
      const res = await http.post('/activity', {
        searchText: search,
        filter: {},
      });
      res.data = res.data.filter(
        (item) =>
          new Date(item.register_date.start_date) >= requestedDate &&
          new Date(item.register_date.start_date) < endOfDay
      );
      if (menu !== '') {
        res.data = res.data.filter((item) => item.activity_type === menu);
      }
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, [search, date, sort, menu]);

  const handleChange = (event) => {
    setMenu(event.target.value);
  };

  const handleChange2 = (event) => {
    setSort(event.target.value);
  };

  // const data = [
  //   { activity_name: 'Event 1', activity_id: '1' },
  //   { activity_name: 'Event 2', activity_id: '2' },
  //   { activity_name: 'Event 3', activity_id: '3' },
  //   { activity_name: 'Event 4', activity_id: '4' },
  // ];
  return (
    <>
      <HeaderSecondary
        headerName={'KU Event'}
        previousPage={'/menu'}
        favAble={true}
        favPage={'/menu/eventFavorite'}
      />

      <div className="m-3 h-[80vh] overflow-scroll">
        <div>
          <Input label="Search" onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="flex justify-between">
          <div className="flex justify-start my-2">
            <Box sx={{ width: 200 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Feed</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  label="Age"
                  onChange={handleChange2}
                >
                  <MenuItem value={'today'}>Today Event</MenuItem>
                  <MenuItem value={'new'}>New Event</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div className="flex justify-end my-2">
            <Box sx={{ width: 150 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">หมวดหมู่</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={menu}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={'university'}>กิจกรรมมหาลัย</MenuItem>
                  <MenuItem value={'ability'}>
                    กิจกรรมด้านพัฒนาทักษะวิชาการเเละวิชาชีพ
                  </MenuItem>
                  <MenuItem value={'social'}>กิจกรรมเพื่อสังคม</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={date}
            onChange={(newValue) => setDate(newValue)}
            // className="bg-primaryGreen-200 text-[#fff]"
          />
        </LocalizationProvider>
        {data?.map((activity) => {
          return <EventCard data={activity} key={activity.activity_id} />;
        })}
      </div>
    </>
  );
};

export default SubjectSearch;
