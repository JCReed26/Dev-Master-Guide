import React from 'react';
import { Link } from 'react-router-dom';

import Refpage from './RefPage';


const Homepage = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Welcome to the Developer Master Guide</h1>
        <p className="mt-2">Select a language or framework to get started:</p>
        <p className='mt-3'>Comming Soon Create Dev Space</p>
      </div>
      <Refpage />
    </div>
  );
};

export default Homepage;