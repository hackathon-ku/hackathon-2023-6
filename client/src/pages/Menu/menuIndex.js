import React from 'react';
import Header from '../../layout/Header/header';
import FooterLayout from '../../layout/Footer/footer';
import Category from './Category/category';

const MenuIndex = () => {
  const Ku = ['About KU', 'KU News', 'Faculty Website', 'KU Contact'];
  const Nisit = [
    'Nisit Info',
    'Registration Report',
    'Grade Report',
    'Activity Transcript',
    'Nisit Card',
    'Vote',
    'Report',
  ];
  const Class = [
    'Class Schedule',
    'Exam Schedule',
    'Exam Score',
    'Subject Search',
  ];
  const Event = ['KU Event', 'Check in', 'Scholarship'];
  const Organization = ['Library', 'KU Happy Place', 'KU Bus'];

  return (
    <>
      <Header />
      <div className="h-[75vh] overflow-scroll">
        <Category categoryName={'KU'} menuName={Ku} />
        <Category categoryName={'Nisit'} menuName={Nisit} />
        <Category categoryName={'Class'} menuName={Class} />
        <Category categoryName={'Event'} menuName={Event} />
        <Category categoryName={'Organization'} menuName={Organization} />
      </div>
      <FooterLayout />
    </>
  );
};

export default MenuIndex;
