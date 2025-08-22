import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">QuickRef</h1>
      <p className="text-lg mb-8">A quick reference for languages and frameworks.</p>

      {/* Add more buttons here */}
      <Link to="/react" className="btn btn-primary">
        ReactJS
      </Link>
    </div>
  );
};

export default HomePage;
