import React from 'react';
import { Link } from 'react-router-dom';

const Refpage = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card for Python */}
        <Link to="/python" className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Python</h2>
          </div>
        </Link>

        {/* Card for JavaScript */}
        <Link to="/javascript" className="card bg-secondary text-secondary-content">
          <div className="card-body">
            <h2 className="card-title">JavaScript</h2>
          </div>
        </Link>

        {/* Card for React */}
        <Link to="/react" className="card bg-accent text-accent-content">
          <div className="card-body">
            <h2 className="card-title">React</h2>
          </div>
        </Link>

        {/* Card for C++ */}
        <Link to="/c++" className="card bg-info text-info-content">
          <div className="card-body">
            <h2 className="card-title">C++</h2>
          </div>
        </Link>

        {/* Card for Terraform */}
        <Link to="/terraform" className="card bg-info text-info-content">
          <div className="card-body">
            <h2 className="card-title">Terraform</h2>
          </div>
        </Link>

        <Link to="/" className='card bg-info text-info-content'>
          <div className="card-body">
            <h2 className="card-title">Warp/ClaudeCode/GeminiCLI/Codex</h2>
          </div>
        </Link>

        {/*
          To add more cards, copy one of the Link blocks above and change the following:
          - `to="/..."`: The URL path for the new page. Make sure this matches a route in App.jsx.
          - `bg-...`: The background color of the card (e.g., bg-success, bg-warning).
          - `card-title`: The name of the language or framework.
          - Remember to create a corresponding page component and add a route in App.jsx.
        */}
      </div>
    </div>
  );
};

export default Refpage;