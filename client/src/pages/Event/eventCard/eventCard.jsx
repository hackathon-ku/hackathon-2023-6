import { width } from '@mui/system';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { GoBookmarkFill, GoBookmark } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ data, reFetch }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/menu/kuevent/${data.activity_id}`);
  };
  const [like, setLike] = useState(false);
  useEffect(() => {
    let liked_lists = JSON.parse(localStorage.getItem('liked_activity'));
    const idx = liked_lists.findIndex((id) => id === data.activity_id);
    setLike(idx !== -1);
  }, []);
  const handleLike = async () => {
    let liked_lists = JSON.parse(localStorage.getItem('liked_activity'));
    if (!liked_lists) {
      localStorage.setItem(
        'liked_activity',
        JSON.stringify([data.activity_id])
      );
      setLike(true);
      if (reFetch) {
        reFetch();
      }
      return;
    }
    const idx = liked_lists.findIndex((id) => id === data.activity_id);
    if (idx !== -1) {
      liked_lists = liked_lists.filter((id) => id !== data.activity_id);
      localStorage.setItem('liked_activity', JSON.stringify(liked_lists));
      setLike(false);
    } else {
      liked_lists.push(data.activity_id);
      localStorage.setItem('liked_activity', JSON.stringify(liked_lists));
      setLike(true);
    }
    if (reFetch) {
      reFetch();
    }
  };
  return (
    <div>
      <div className="relative h-[250px] w-full bg-secondaryGreen-200 mb-4 pt-2 rounded-lg shadow-md flex flex-col justify-center items-center">
        <img
          src={
            data?.activity_image ||
            'https://www.hubspot.com/hubfs/how-to-start-coding-1.jpg'
          }
          width="200"
        />
        <div
          className="absolute top-2 right-2"
          onClick={() => handleLike(data.activity_id)}
        >
          {like ? <GoBookmarkFill size={25} /> : <GoBookmark size={25} />}
        </div>
        <p className="my-2 font-bold">{data?.activity_name}</p>
        <p className="mb-2 font-[300] text-sm">
          {data?.register_date?.start_date ||
            dayjs(new Date()).format('DD/MM/YYYY')}
        </p>
        <div
          className="relative bg-secondaryGreen-500 w-full text-center flex justify-center itens-center p-2 rounded-b-lg"
          onClick={handleClick}
        >
          See more detail >
        </div>
      </div>
    </div>
  );
};

export default EventCard;
