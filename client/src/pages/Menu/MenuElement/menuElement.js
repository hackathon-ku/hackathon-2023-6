import React from 'react';
import { BiSolidReport } from 'react-icons/bi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { IoMdPin } from 'react-icons/io';
import { MdEvent, MdEventAvailable } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const MenuElement = ({ name }) => {
  const navigate = useNavigate();
  const handleClick = (page) => {
    navigate(page);
  };
  const icons = [
    {
      iconName: 'About KU',
      icon: <IoMdPin />,
      linkTo: '',
    },
    {
      iconName: 'KU News',
      icon: <IoMdPin />,
      linkTo: '',
    },
    {
      iconName: 'Faculty Website',
      icon: <IoMdPin />,
      linkTo: '',
    },
    {
      iconName: 'KU Contact',
      icon: <IoMdPin />,
      linkTo: '',
    },
    {
      iconName: 'Nisit Info',
      icon: <IoMdPin />,
      linkTo: '',
    },
    {
      iconName: 'Registration Report',
      icon: <BiSolidReport />,
      linkTo: '/menu/registrationReport',
    },
    {
      iconName: 'Grade Report',
      icon: <IoMdPin />,
      linkTo: '',
    },
    {
      iconName: 'Activity Transcript',
      icon: <MdEventAvailable />,
      linkTo: '/menu/activityTranscript',
    },
    {
      iconName: 'Nisit Card',
      icon: <IoMdPin />,
      linkTo: '',
    },
    {
      iconName: 'Vote',
      icon: <IoMdPin />,
      linkTo: '',
    },
    {
      iconName: 'Report',
      icon: <IoMdPin />,
      linkTo: '',
    },
    {
      iconName: 'Class Schedule',
      icon: <IoMdPin />,
      linkTo: '',
    },
    {
      iconName: 'Exam Schedule',
      icon: <IoMdPin />,
      linkTo: '',
    },
    {
      iconName: 'Exam Score',
      icon: <IoMdPin />,
      linkTo: '',
    },
    {
      iconName: 'Subject Search',
      icon: <AiOutlineFileSearch />,
      linkTo: '/menu/subjectSearch',
    },
    {
      iconName: 'KU Event',
      icon: <MdEvent />,
      linkTo: '/menu/kuevent',
    },
    {
      iconName: 'Check in',
      icon: <IoMdPin />,
      linkTo: '',
    },
    {
      iconName: 'Scholarship',
      icon: <IoMdPin />,
      linkTo: '',
    },
    {
      iconName: 'Library',
      icon: <IoMdPin />,
      linkTo: '',
    },
    {
      iconName: 'KU Happy Place',
      icon: <IoMdPin />,
      linkTo: '',
    },
    {
      iconName: 'KU Bus',
      icon: <IoMdPin />,
      linkTo: '',
    },
  ];

  const useIcon = icons.find((item) => item.iconName === name);

  return (
    <>
      <div className="me-3">
        <div className="flex justify-center items-center">
          <button
            className="rounded-full bg-secondaryGreen-50 p-3 cursor-pointer"
            onClick={() => handleClick(useIcon.linkTo)}
          >
            {useIcon && useIcon.icon}
          </button>
        </div>
        <p className="text-center text-xs text-[0.6rem] pt-2 ">{name}</p>
      </div>
    </>
  );
};

export default MenuElement;
