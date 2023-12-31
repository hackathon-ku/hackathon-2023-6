import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/homePage';
import MenuIndex from './pages/Menu/menuIndex';
import RegisIndex from './pages/RegisterationReport/regisIndex';
import SubjectSearch from './pages/RegisterationReport/subjectSearch/subjectSearch';
import SubjectFavorite from './pages/RegisterationReport/subjectFavorite/subjectFavorite';
import KUEvent from './pages/Event/KUEvent/KUEvent.jsx';
import EventFavorite from './pages/Event/eventFavorite/eventFavorite.jsx';
import EventDetail from './pages/Event/eventDetail/eventDetail.jsx';
import ActivityTranscript from './pages/ActivityTranscript/activityTranscriptIndex';
import HomeQuickMenuEdit from './pages/Home/HomeQuickMenuEdit/homeQuickMenuEdit';

import Login from './pages/Login/login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/editHomeMenu" element={<HomeQuickMenuEdit />} />
          <Route path="/menu" element={<MenuIndex />} />
          <Route path="/community" element={<RegisIndex />} />
          <Route path="/menu/registrationReport" element={<RegisIndex />} />
          <Route path="/menu/subjectSearch" element={<SubjectSearch />} />
          <Route path="/menu/subjectFavorite" element={<SubjectFavorite />} />
          <Route path="/menu/kuevent" element={<KUEvent />} />
          <Route path="/menu/eventFavorite" element={<EventFavorite />} />
          <Route path="/menu/kuevent/:activity_id" element={<EventDetail />} />
          <Route
            path="/menu/activityTranscript"
            element={<ActivityTranscript />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
