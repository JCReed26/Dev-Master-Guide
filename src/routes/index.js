import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ReactPage from '../pages/ReactPage';

// Import other pages here
// e.g. import VuePage from '../pages/VuePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/react" element={<ReactPage />} />

      {/* Add new routes here */}
      {/* e.g. <Route path="/vue" element={<VuePage />} /> */}
    </Routes>
  );
};

export default AppRoutes;
