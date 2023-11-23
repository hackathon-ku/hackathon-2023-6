import React, { useEffect, useState } from 'react';
import HeaderSecondary from '../../../layout/Header/headerSecondary';

import http from '../../../api/http';
import EventCard from '../eventCard/eventCard.jsx';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

const EventFavorite = () => {
  const [data, setData] = useState({});

  let { activity_id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const res = await http.get(`/activity/${activity_id}`);
      res.data.register_date.start_date = new Date(
        res.data.register_date.start_date
      ).toDateString();
      res.data.register_date.end_date = new Date(
        res.data.register_date.end_date
      ).toDateString();
      res.data.event_date.start_date = new Date(
        res.data.event_date.start_date
      ).toDateString();
      res.data.event_date.end_date = new Date(
        res.data.event_date.end_date
      ).toDateString();
      res.data.register_date.start_time = new Date(
        res.data.register_date.start_date
      ).toLocaleTimeString();
      res.data.register_date.end_time = new Date(
        res.data.register_date.end_date
      ).toLocaleTimeString();
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="h-screen">
      <HeaderSecondary headerName={'Detail'} previousPage={'/menu/kuevent'} />
      <div className="m-3 py-2">
        <div>
          <img src={data.activity_image} alt="" className="shadow-md" />
        </div>
        <div className="border border-solid flex flex-col gap-y-3 p-2 my-3 shadow-xl rounded">
          <p className="font-bold text-center text-xl">{data.activity_name}</p>
          <p>{data.detail}</p>
          <div>
            <p>
              <span className="font-bold">Activity For:</span>{' '}
              {data.activity_for}
            </p>
          </div>
          <div>
            <p className="font-bold">Registeration Date:</p>
            <p>Date: {data?.register_date?.start_date || ''}</p>
            <p>
              Time: {data?.register_date?.start_time || ''} -
              {data?.register_date?.end_time || ''}
            </p>
            Location: {data.location}
          </div>
          <div>
            <p className="font-bold">Activity Type: {data.activity_type}</p>
            <p className="font-bold">Activity Hours: {data.hours}</p>
          </div>
          <div>
            <p className="font-bold">Highlights:</p>
            <p>{data.hilights}</p>
          </div>
          <div>
            <span className="font-bold">Link:</span> {data.link}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventFavorite;
