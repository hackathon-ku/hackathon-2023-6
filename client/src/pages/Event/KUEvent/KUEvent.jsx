import React, { useState } from 'react';
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

import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

// import SubjectElement from '../subjectElement/subjectElement';

const SubjectSearch = () => {
  const [menu, setMenu] = React.useState('');

  const handleChange = (event) => {
    setMenu(event.target.value);
  };

  const [date, setDate] = useState(dayjs('2022-04-17'));
  console.log(date.$d);

  const data = [
    { activity_name: 'Event 1', activity_id: '1' },
    { activity_name: 'Event 2', activity_id: '2' },
    { activity_name: 'Event 3', activity_id: '3' },
    { activity_name: 'Event 4', activity_id: '4' },
  ];
  return (
    <>
      <HeaderSecondary
        headerName={'KU Event'}
        previousPage={'/menu'}
        favAble={true}
        favPage={'/menu/eventFavorite'}
      />

      <div className="m-3 h-[70vh] overflow-scroll">
        <div>
          <Input label="Search" />
        </div>
        <div className="flex justify-between">
          <div className="flex justify-start my-2">
            <Box sx={{ minWidth: 200 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">New Event</InputLabel>
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

          <div className="flex justify-end my-2">
            <Box sx={{ minWidth: 150 }}>
              <FormControl fullWidth>
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

      <FooterSecondary
        leftPageName={"Registration Report"}
        rightPageName={"Subject Search"}
        leftPage={'/menu/registrationReport'}
        rightPage={'/menu/subjectSearch'}
      />
    </>
  );
};

export default SubjectSearch;
